import { readFile, writeFile } from "fs/promises";
import getPath from "@/utils/getPath";
import fs from "fs";
import path from "path";
import knex from "knex";
import initDB from "@/lib/initDB";
// import fixDB from "@/lib/fixDB";
import type { DB } from "@/types/database";
import crypto from "crypto";
import fixDB from "@/lib/fixDB";

type TableName = keyof DB & string;
type RowType<TName extends TableName> = DB[TName];

// ถ้าตั้ง SUPABASE_DB_URL ไว้ ใช้ Postgres (Supabase) เป็นฐานข้อมูลหลักแทน SQLite local
export const isPostgres = !!process.env.SUPABASE_DB_URL;

let db: ReturnType<typeof knex>;
if (isPostgres) {
  console.log("数据库: Supabase Postgres");
  // pg คืนค่า BIGINT (OID 20) เป็น string เสมอ (กันตัวเลขเกิน Number.MAX_SAFE_INTEGER)
  // แต่แอปนี้ใช้ bigint กับ id/timestamp/credits ที่ไม่มีทางเกิน safe integer จริง จึงสั่งให้ parse เป็น number ตรงๆ
  // กันบั๊กเงียบๆ เช่น "500" + (-100) กลายเป็น string concat แทนการลบเลขจริง
  const { types } = require("pg");
  types.setTypeParser(20, (val: string) => parseInt(val, 10));
  db = knex({
    client: "pg",
    connection: process.env.SUPABASE_DB_URL,
    pool: { min: 0, max: 10 },
  });
} else {
  const dbPath = getPath("db2.sqlite");
  console.log("数据库目录:", dbPath);
  const dbDir = path.dirname(dbPath);

  // 确保数据库目录存在
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }

  // 创建空数据库文件
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, "");
  }

  db = knex({
    client: "better-sqlite3",
    connection: {
      filename: dbPath,
    },
    useNullAsDefault: true,
  });
}

// db.raw() คืนค่าไม่เหมือนกันระหว่าง dialect: better-sqlite3 คืน array ตรงๆ, pg คืน {rows:[...]}
export async function rawRows<T = any>(sql: string): Promise<T[]> {
  const result = await db.raw(sql);
  return isPostgres ? result.rows : result;
}

// ดึงรายชื่อตารางของแอป (ไม่รวมตารางระบบของ sqlite/knex) รองรับทั้งสอง dialect
export async function listUserTables(): Promise<string[]> {
  if (isPostgres) {
    const rows = await rawRows<{ table_name: string }>(
      `SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name NOT LIKE 'knex_%'`,
    );
    return rows.map((r) => r.table_name);
  }
  const rows = await rawRows<{ name: string }>(`SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' AND name NOT LIKE 'knex_%'`);
  return rows.map((r) => r.name);
}

// ปิด/เปิดการเช็ค foreign key ชั่วคราว (ใช้ตอนล้าง/นำเข้าข้อมูลทั้งฐาน) — วิธีทำต่างกันระหว่าง dialect
export async function setForeignKeyChecks(enabled: boolean): Promise<void> {
  if (isPostgres) {
    await db.raw(`SET session_replication_role = '${enabled ? "origin" : "replica"}'`);
  } else {
    await db.raw(`PRAGMA foreign_keys = ${enabled ? "ON" : "OFF"}`);
  }
}

(async () => {
  await initDB(db);
  await fixDB(db);
  if (process.env.NODE_ENV == "dev") initKnexType(db);
})();

const dbClient = Object.assign(<TName extends TableName>(table: TName) => db<RowType<TName>, RowType<TName>[]>(table), db);
dbClient.schema = db.schema;
export default dbClient;

export { db };

async function initKnexType(knexDb: any) {
  const { Client } = await import("@rmp135/sql-ts");
  const outFile = "src/types/database.d.ts";
  const dbClient = Client.fromConfig({
    interfaceNameFormat: "${table}",
    typeMap: {
      number: ["bigint", "int8", "int4", "integer"],
      string: ["text", "varchar", "char"],
    },
  }).fetchDatabase(knexDb);
  const declarations = await dbClient.toTypescript();
  const dbObject = await dbClient.toObject();
  const customHeader = `//该文件由脚本自动生成，请勿手动修改`;
  // 清除上次的注释头
  let declBody = declarations.replace(/^\/\*[\s\S]*?\*\/\s*/, "");
  declBody = declBody.replace(/(\n\s*)\/\*([^*][\s\S]*?)\*\//g, "$1/**$2*/");
  const tableInterfaces = dbObject.schemas.flatMap((schema) => schema.tables.map((table) => table.interfaceName));
  const aggregateTypes = `
export interface DB {
${tableInterfaces.map((name) => `  ${JSON.stringify(name)}: ${name};`).join("\n")}
}
`;
  // 哈希仅基于结构化信息，header和空格不算
  const hashSource = JSON.stringify({
    tableInterfaces,
    declBody,
  });
  const hash = crypto.createHash("md5").update(hashSource).digest("hex");
  // 文件内容
  const content = `// @db-hash ${hash}\n${customHeader}\n\n` + declBody + aggregateTypes;
  let needWrite = true;
  try {
    const current = await readFile(outFile, "utf8");
    // 文件头已存在相同 hash，不需要写
    const match = current.match(/^\/\/\s*@db-hash\s*([a-zA-Z0-9]+)\n/);
    const currentHash = match ? match[1] : null;
    if (currentHash === hash) {
      needWrite = false;
    }
  } catch (err) {
    needWrite = true;
  }
  if (needWrite) await writeFile(outFile, content, "utf8");
}
