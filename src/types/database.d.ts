// @db-hash 15e6bf20ad5ccb422007e6e52a605954
//该文件由脚本自动生成，请勿手动修改

/* Auth: Audit trail for user actions. */
export interface audit_log_entries {
  'created_at'?: Date | null;
  'id': string;
  'instance_id'?: string | null;
  'ip_address'?: string;
  'payload'?: Object | null;
}
export interface custom_oauth_providers {
  'acceptable_client_ids'?: string[];
  'attribute_mapping'?: any;
  'authorization_params'?: any;
  'authorization_url'?: string | null;
  'cached_discovery'?: any | null;
  'client_id': string;
  'client_secret': string;
  'created_at'?: Date;
  'custom_claims_allowlist'?: string[];
  'discovery_cached_at'?: Date | null;
  'discovery_url'?: string | null;
  'email_optional'?: boolean;
  'enabled'?: boolean;
  'id'?: string;
  'identifier': string;
  'issuer'?: string | null;
  'jwks_uri'?: string | null;
  'name': string;
  'pkce_enabled'?: boolean;
  'provider_type': string;
  'scopes'?: string[];
  'skip_nonce_check'?: boolean;
  'token_url'?: string | null;
  'updated_at'?: Date;
  'userinfo_url'?: string | null;
}

/** Stores metadata for all OAuth/SSO login flows */
export interface flow_state {
  'auth_code'?: string | null;
  'auth_code_issued_at'?: Date | null;
  'authentication_method': string;
  'code_challenge'?: string | null;
  'code_challenge_method'?: code_challenge_method | null;
  'created_at'?: Date | null;
  'email_optional'?: boolean;
  'id': string;
  'invite_token'?: string | null;
  'linking_target_id'?: string | null;
  'oauth_client_state_id'?: string | null;
  'provider_access_token'?: string | null;
  'provider_refresh_token'?: string | null;
  'provider_type': string;
  'referrer'?: string | null;
  'updated_at'?: Date | null;
  'user_id'?: string | null;
}

/** Auth: Stores identities associated to a user. */
export interface identities {
  'created_at'?: Date | null;
  
  /** Auth: Email is a generated column that references the optional email property in the identity_data */
  'email'?: string | null;
  'id'?: string;
  'identity_data': any;
  'last_sign_in_at'?: Date | null;
  'provider': string;
  'provider_id': string;
  'updated_at'?: Date | null;
  'user_id': string;
}

/** Auth: Manages users across multiple sites. */
export interface instances {
  'created_at'?: Date | null;
  'id': string;
  'raw_base_config'?: string | null;
  'updated_at'?: Date | null;
  'uuid'?: string | null;
}

/** auth: stores authenticator method reference claims for multi factor authentication */
export interface mfa_amr_claims {
  'authentication_method': string;
  'created_at': Date;
  'id': string;
  'session_id': string;
  'updated_at': Date;
}

/** auth: stores metadata about challenge requests made */
export interface mfa_challenges {
  'created_at': Date;
  'factor_id': string;
  'id': string;
  'ip_address': any;
  'otp_code'?: string | null;
  'verified_at'?: Date | null;
  'web_authn_session_data'?: any | null;
}

/** auth: stores metadata about factors */
export interface mfa_factors {
  'created_at': Date;
  'factor_type': factor_type;
  'friendly_name'?: string | null;
  'id': string;
  'last_challenged_at'?: Date | null;
  
  /** Stores the latest WebAuthn challenge data including attestation/assertion for customer verification */
  'last_webauthn_challenge_data'?: any | null;
  'phone'?: string | null;
  'secret'?: string | null;
  'status': factor_status;
  'updated_at': Date;
  'user_id': string;
  'web_authn_aaguid'?: string | null;
  'web_authn_credential'?: any | null;
}
export interface oauth_authorizations {
  'approved_at'?: Date | null;
  'authorization_code'?: string | null;
  'authorization_id': string;
  'client_id': string;
  'code_challenge'?: string | null;
  'code_challenge_method'?: code_challenge_method | null;
  'created_at'?: Date;
  'expires_at'?: Date;
  'id': string;
  'nonce'?: string | null;
  'redirect_uri': string;
  'resource'?: string | null;
  'response_type'?: oauth_response_type;
  'scope': string;
  'state'?: string | null;
  'status'?: oauth_authorization_status;
  'user_id'?: string | null;
}
export interface oauth_clients {
  'client_name'?: string | null;
  'client_secret_hash'?: string | null;
  'client_type'?: oauth_client_type;
  'client_uri'?: string | null;
  'created_at'?: Date;
  'deleted_at'?: Date | null;
  'grant_types': string;
  'id': string;
  'logo_uri'?: string | null;
  'redirect_uris': string;
  'registration_type': oauth_registration_type;
  'token_endpoint_auth_method': string;
  'updated_at'?: Date;
}

/** Stores OAuth states for third-party provider authentication flows where Supabase acts as the OAuth client. */
export interface oauth_client_states {
  'code_verifier'?: string | null;
  'created_at': Date;
  'id': string;
  'provider_type': string;
}
export interface oauth_consents {
  'client_id': string;
  'granted_at'?: Date;
  'id': string;
  'revoked_at'?: Date | null;
  'scopes': string;
  'user_id': string;
}
export interface one_time_tokens {
  'created_at'?: Date;
  'id': string;
  'relates_to': string;
  'token_hash': string;
  'token_type': one_time_token_type;
  'updated_at'?: Date;
  'user_id': string;
}

/** Auth: Store of tokens used to refresh JWT tokens once they expire. */
export interface refresh_tokens {
  'created_at'?: Date | null;
  'id'?: number;
  'instance_id'?: string | null;
  'parent'?: string | null;
  'revoked'?: boolean | null;
  'session_id'?: string | null;
  'token'?: string | null;
  'updated_at'?: Date | null;
  'user_id'?: string | null;
}

/** Auth: Manages SAML Identity Provider connections. */
export interface saml_providers {
  'attribute_mapping'?: any | null;
  'created_at'?: Date | null;
  'entity_id': string;
  'id': string;
  'metadata_url'?: string | null;
  'metadata_xml': string;
  'name_id_format'?: string | null;
  'sso_provider_id': string;
  'updated_at'?: Date | null;
}

/** Auth: Contains SAML Relay State information for each Service Provider initiated login. */
export interface saml_relay_states {
  'created_at'?: Date | null;
  'flow_state_id'?: string | null;
  'for_email'?: string | null;
  'id': string;
  'redirect_to'?: string | null;
  'request_id': string;
  'sso_provider_id': string;
  'updated_at'?: Date | null;
}

/** Auth: Manages updates to the auth system. */
export interface schema_migrations {
  'version': string;
}

/** Auth: Stores session data associated to a user. */
export interface sessions {
  'aal'?: aal_level | null;
  'created_at'?: Date | null;
  'factor_id'?: string | null;
  'id': string;
  'ip'?: any | null;
  
  /** Auth: Not after is a nullable column that contains a timestamp after which the session should be regarded as expired. */
  'not_after'?: Date | null;
  'oauth_client_id'?: string | null;
  'refreshed_at'?: Date | null;
  
  /** Holds the ID (counter) of the last issued refresh token. */
  'refresh_token_counter'?: number | null;
  
  /** Holds a HMAC-SHA256 key used to sign refresh tokens for this session. */
  'refresh_token_hmac_key'?: string | null;
  'scopes'?: string | null;
  'tag'?: string | null;
  'updated_at'?: Date | null;
  'user_agent'?: string | null;
  'user_id': string;
}

/** Auth: Manages SSO email address domain mapping to an SSO Identity Provider. */
export interface sso_domains {
  'created_at'?: Date | null;
  'domain': string;
  'id': string;
  'sso_provider_id': string;
  'updated_at'?: Date | null;
}

/** Auth: Manages SSO identity provider information; see saml_providers for SAML. */
export interface sso_providers {
  'created_at'?: Date | null;
  'disabled'?: boolean | null;
  'id': string;
  
  /** Auth: Uniquely identifies a SSO provider according to a user-chosen resource ID (case insensitive), useful in infrastructure as code. */
  'resource_id'?: string | null;
  'updated_at'?: Date | null;
}

/** Auth: Stores user login data within a secure schema. */
export interface users {
  'aud'?: string | null;
  'banned_until'?: Date | null;
  'confirmation_sent_at'?: Date | null;
  'confirmation_token'?: string | null;
  'confirmed_at'?: Date | null;
  'created_at'?: Date | null;
  'deleted_at'?: Date | null;
  'email'?: string | null;
  'email_change'?: string | null;
  'email_change_confirm_status'?: number | null;
  'email_change_sent_at'?: Date | null;
  'email_change_token_current'?: string | null;
  'email_change_token_new'?: string | null;
  'email_confirmed_at'?: Date | null;
  'encrypted_password'?: string | null;
  'id': string;
  'instance_id'?: string | null;
  'invited_at'?: Date | null;
  'is_anonymous'?: boolean;
  
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  'is_sso_user'?: boolean;
  'is_super_admin'?: boolean | null;
  'last_sign_in_at'?: Date | null;
  'phone'?: string | null;
  'phone_change'?: string | null;
  'phone_change_sent_at'?: Date | null;
  'phone_change_token'?: string | null;
  'phone_confirmed_at'?: Date | null;
  'raw_app_meta_data'?: any | null;
  'raw_user_meta_data'?: any | null;
  'reauthentication_sent_at'?: Date | null;
  'reauthentication_token'?: string | null;
  'recovery_sent_at'?: Date | null;
  'recovery_token'?: string | null;
  'role'?: string | null;
  'updated_at'?: Date | null;
}
export interface webauthn_challenges {
  'challenge_type': string;
  'created_at'?: Date;
  'expires_at': Date;
  'id'?: string;
  'session_data': any;
  'user_id'?: string | null;
}
export interface webauthn_credentials {
  'aaguid'?: string | null;
  'attestation_type'?: string;
  'backed_up'?: boolean;
  'backup_eligible'?: boolean;
  'created_at'?: Date;
  'credential_id': any;
  'friendly_name'?: string;
  'id'?: string;
  'last_used_at'?: Date | null;
  'public_key': any;
  'sign_count'?: number;
  'transports'?: any;
  'updated_at'?: Date;
  'user_id': string;
}
export enum aal_level {
  'aal1' = 'aal1',
  'aal2' = 'aal2',
  'aal3' = 'aal3',
}
export enum code_challenge_method {
  'plain' = 'plain',
  's256' = 's256',
}
export enum factor_status {
  'unverified' = 'unverified',
  'verified' = 'verified',
}
export enum factor_type {
  'phone' = 'phone',
  'totp' = 'totp',
  'webauthn' = 'webauthn',
}
export enum oauth_authorization_status {
  'approved' = 'approved',
  'denied' = 'denied',
  'expired' = 'expired',
  'pending' = 'pending',
}
export enum oauth_client_type {
  'confidential' = 'confidential',
  'public' = 'public',
}
export enum oauth_registration_type {
  'dynamic' = 'dynamic',
  'manual' = 'manual',
}
export enum oauth_response_type {
  'code' = 'code',
}
export enum one_time_token_type {
  'confirmation_token' = 'confirmation_token',
  'email_change_token_current' = 'email_change_token_current',
  'email_change_token_new' = 'email_change_token_new',
  'phone_change_token' = 'phone_change_token',
  'reauthentication_token' = 'reauthentication_token',
  'recovery_token' = 'recovery_token',
}
export interface buckets {
  'allowed_mime_types'?: string[] | null;
  'avif_autodetection'?: boolean | null;
  'created_at'?: Date | null;
  'file_size_limit'?: number | null;
  'id': string;
  'name': string;
  
  /** Field is deprecated, use owner_id instead */
  'owner'?: string | null;
  'owner_id'?: string | null;
  'public'?: boolean | null;
  'type'?: buckettype;
  'updated_at'?: Date | null;
  'versioning_status'?: string;
}
export interface buckets_analytics {
  'created_at'?: Date;
  'deleted_at'?: Date | null;
  'format'?: string;
  'id'?: string;
  'name': string;
  'type'?: buckettype;
  'updated_at'?: Date;
}
export interface buckets_vectors {
  'created_at'?: Date;
  'id': string;
  'type'?: buckettype;
  'updated_at'?: Date;
}
export interface migrations {
  'executed_at'?: Date | null;
  'hash': string;
  'id': number;
  'name': string;
}
export interface objects {
  'archived_at'?: Date | null;
  'bucket_id'?: string | null;
  'created_at'?: Date | null;
  'id'?: string;
  'is_delete_marker'?: boolean;
  'is_versioned'?: boolean;
  'last_accessed_at'?: Date | null;
  'metadata'?: any | null;
  'name'?: string | null;
  
  /** Field is deprecated, use owner_id instead */
  'owner'?: string | null;
  'owner_id'?: string | null;
  'path_tokens'?: string[] | null;
  'updated_at'?: Date | null;
  'user_metadata'?: any | null;
  'version'?: string | null;
}
export interface s3_multipart_uploads {
  'bucket_id': string;
  'created_at'?: Date;
  'id': string;
  'in_progress_size'?: number;
  'key': string;
  'metadata'?: any | null;
  'owner_id'?: string | null;
  'upload_signature': string;
  'user_metadata'?: any | null;
  'version': string;
}
export interface s3_multipart_uploads_parts {
  'bucket_id': string;
  'created_at'?: Date;
  'etag': string;
  'id'?: string;
  'key': string;
  'owner_id'?: string | null;
  'part_number': number;
  'size'?: number;
  'upload_id': string;
  'version': string;
}
export interface vector_indexes {
  'bucket_id': string;
  'created_at'?: Date;
  'data_type': string;
  'dimension': number;
  'distance_metric': string;
  'id'?: string;
  'metadata_configuration'?: any | null;
  'name': string;
  'updated_at'?: Date;
}
export enum buckettype {
  'ANALYTICS' = 'ANALYTICS',
  'STANDARD' = 'STANDARD',
  'VECTOR' = 'VECTOR',
}
export interface decrypted_secrets {
  'created_at'?: Date | null;
  'decrypted_secret'?: string | null;
  'description'?: string | null;
  'id'?: string | null;
  'key_id'?: string | null;
  'name'?: string | null;
  'nonce'?: any | null;
  'secret'?: string | null;
  'updated_at'?: Date | null;
}

/** Table with encrypted `secret` column for storing sensitive information on disk. */
export interface secrets {
  'created_at'?: Date;
  'description'?: string;
  'id'?: string;
  'key_id'?: string | null;
  'name'?: string | null;
  'nonce'?: any | null;
  'secret': string;
  'updated_at'?: Date;
}
export interface memories {
  'content': string;
  'createTime': number;
  'embedding'?: string | null;
  'id': string;
  'isolationKey': string;
  'name'?: string | null;
  'relatedMessageIds'?: string | null;
  'role'?: string | null;
  'summarized'?: number | null;
  'type': string;
}
export interface o_agentDeploy {
  'desc'?: string | null;
  'disabled'?: boolean | null;
  'id'?: number;
  'key'?: string | null;
  'maxOutputTokens'?: number | null;
  'model'?: string | null;
  'modelName'?: string | null;
  'name'?: string | null;
  'temperature'?: number | null;
  'type'?: string | null;
  'vendorId'?: string | null;
}
export interface o_agentWorkData {
  'createTime'?: number | null;
  'data'?: string | null;
  'episodesId'?: number | null;
  'id'?: number;
  'key'?: string | null;
  'projectId'?: number | null;
  'updateTime'?: number | null;
}
export interface o_artStyle {
  'fileUrl'?: string | null;
  'id'?: number;
  'label'?: string | null;
  'name'?: string | null;
  'prompt'?: string | null;
}
export interface o_assets {
  'assetsId'?: number | null;
  'audioBindState'?: number | null;
  'describe'?: string | null;
  'flowId'?: number | null;
  'id'?: number;
  'imageId'?: number | null;
  'name'?: string | null;
  'projectId'?: number | null;
  'prompt'?: string | null;
  'promptErrorReason'?: string | null;
  'promptState'?: string | null;
  'remark'?: string | null;
  'scriptId'?: number | null;
  'startTime'?: number | null;
  'type'?: string | null;
}
export interface o_assets2Storyboard {
  'assetId': number;
  'seq'?: number;
  'storyboardId': number;
}
export interface o_assetsRole2Audio {
  'assetsAudioId': number;
  'assetsRoleId': number;
}
export interface o_creditLedger {
  'balanceAfter'?: number | null;
  'createTime'?: number | null;
  'delta'?: number | null;
  'id': string;
  'note'?: string | null;
  'reason'?: string | null;
  'refId'?: string | null;
  'userId': number;
}
export interface o_event {
  'createTime'?: number | null;
  'detail'?: string | null;
  'id'?: number;
  'name'?: string | null;
}
export interface o_eventChapter {
  'eventId'?: number | null;
  'id'?: number;
  'novelId'?: number | null;
}
export interface o_image {
  'assetsId'?: number | null;
  'errorReason'?: string | null;
  'filePath'?: string | null;
  'id'?: number;
  'model'?: string | null;
  'resolution'?: string | null;
  'state'?: string | null;
  'type'?: string | null;
}
export interface o_imageFlow {
  'flowData': string;
  'id'?: number;
}
export interface o_modelPrompt {
  'fileName'?: string | null;
  'id'?: number;
  'model'?: string | null;
  'path'?: string | null;
  'vendorId'?: string | null;
}
export interface o_novel {
  'chapter'?: string | null;
  'chapterData'?: string | null;
  'chapterIndex'?: number | null;
  'createTime'?: number | null;
  'errorReason'?: string | null;
  'event'?: string | null;
  'eventState'?: number | null;
  'id'?: number;
  'projectId'?: number | null;
  'reel'?: string | null;
}
export interface o_project {
  'artStyle'?: string | null;
  'createTime'?: number | null;
  'directorManual'?: string | null;
  'id'?: number;
  'imageModel'?: string | null;
  'imageQuality'?: string | null;
  'intro'?: string | null;
  'mode'?: string | null;
  'name'?: string | null;
  'projectType'?: string | null;
  'type'?: string | null;
  'userId'?: number | null;
  'videoModel'?: string | null;
  'videoRatio'?: string | null;
}
export interface o_prompt {
  'data'?: string | null;
  'id'?: number;
  'name'?: string | null;
  'type'?: string | null;
  'useData'?: string | null;
}
export interface o_script {
  'content'?: string | null;
  'createTime'?: number | null;
  'errorReason'?: string | null;
  'extractState'?: number | null;
  'id'?: number;
  'name'?: string | null;
  'projectId'?: number | null;
}
export interface o_scriptAssets {
  'assetId': number;
  'scriptId': number;
}
export interface o_setting {
  'key': string;
  'value'?: string | null;
}
export interface o_skillAttribution {
  'attribution': string;
  'skillId': string;
}
export interface o_skillList {
  'createTime': number;
  'description': string;
  'embedding'?: string | null;
  'id': string;
  'md5': string;
  'name': string;
  'path': string;
  'state': number;
  'type': string;
  'updateTime': number;
}
export interface o_skillOwnership {
  'createdByUserId'?: number | null;
  'createTime'?: number | null;
  'path': string;
}
export interface o_storyboard {
  'createTime'?: number | null;
  'duration'?: string | null;
  'filePath'?: string | null;
  'flowId'?: number | null;
  'id'?: number;
  'index'?: number | null;
  'projectId'?: number | null;
  'prompt'?: string | null;
  'reason'?: string | null;
  'scriptId'?: number | null;
  'shouldGenerateImage'?: number | null;
  'state'?: string | null;
  'track'?: string | null;
  'trackId'?: number | null;
  'videoDesc'?: string | null;
}
export interface o_tasks {
  'describe'?: string | null;
  'id'?: number;
  'model'?: string | null;
  'projectId'?: number | null;
  'reason'?: string | null;
  'relatedObjects'?: string | null;
  'startTime'?: number | null;
  'state'?: string | null;
  'taskClass'?: string | null;
}
export interface o_topupOrder {
  'amountThb'?: number | null;
  'createTime'?: number | null;
  'credits'?: number | null;
  'id': string;
  'providerResponse'?: string | null;
  'slipImageUrl'?: string | null;
  'slipRef'?: string | null;
  'status'?: string | null;
  'userId': number;
  'verifiedTime'?: number | null;
}
export interface o_user {
  'avatar'?: string | null;
  'createTime'?: number | null;
  'credits'?: number | null;
  'displayName'?: string | null;
  'id'?: number;
  'isAdmin'?: boolean | null;
  'lineUserId'?: string | null;
  'name'?: string | null;
  'password'?: string | null;
  'supabaseUserId'?: string | null;
}
export interface o_vendorConfig {
  'enable'?: number | null;
  'id': string;
  'inputValues'?: string | null;
  'models'?: string | null;
}
export interface o_video {
  'errorReason'?: string | null;
  'filePath'?: string | null;
  'id'?: number;
  'projectId'?: number | null;
  'scriptId'?: number | null;
  'state'?: string | null;
  'time'?: number | null;
  'videoTrackId'?: number | null;
}
export interface o_videoTrack {
  'duration'?: number | null;
  'id'?: number;
  'projectId'?: number | null;
  'prompt'?: string | null;
  'reason'?: string | null;
  'scriptId'?: number | null;
  'selectVideoId'?: number | null;
  'state'?: string | null;
  'videoId'?: number | null;
}
export interface messages {
  'binary_payload'?: any | null;
  'event'?: string | null;
  'extension': string;
  'id'?: string;
  'inserted_at'?: Date;
  'payload'?: any | null;
  'private'?: boolean | null;
  'skip_broadcast'?: boolean;
  'topic': string;
  'updated_at'?: Date;
}
export interface schema_migrations {
  'inserted_at'?: Date | null;
  'version': number;
}
export interface subscription {
  'action_filter'?: string | null;
  'claims': any;
  'claims_role'?: any;
  'created_at'?: Date;
  'entity': any;
  'filters'?: any;
  'id'?: number;
  'selected_columns'?: string[] | null;
  'subscription_id': string;
}
export enum action {
  'DELETE' = 'DELETE',
  'ERROR' = 'ERROR',
  'INSERT' = 'INSERT',
  'TRUNCATE' = 'TRUNCATE',
  'UPDATE' = 'UPDATE',
}
export enum equality_op {
  'eq' = 'eq',
  'gt' = 'gt',
  'gte' = 'gte',
  'ilike' = 'ilike',
  'imatch' = 'imatch',
  'in' = 'in',
  'is' = 'is',
  'isdistinct' = 'isdistinct',
  'like' = 'like',
  'lt' = 'lt',
  'lte' = 'lte',
  'match' = 'match',
  'neq' = 'neq',
}
export interface pg_stat_statements {
  'calls'?: number | null;
  'dbid'?: any | null;
  'jit_deform_count'?: number | null;
  'jit_deform_time'?: number | null;
  'jit_emission_count'?: number | null;
  'jit_emission_time'?: number | null;
  'jit_functions'?: number | null;
  'jit_generation_time'?: number | null;
  'jit_inlining_count'?: number | null;
  'jit_inlining_time'?: number | null;
  'jit_optimization_count'?: number | null;
  'jit_optimization_time'?: number | null;
  'local_blk_read_time'?: number | null;
  'local_blks_dirtied'?: number | null;
  'local_blks_hit'?: number | null;
  'local_blks_read'?: number | null;
  'local_blks_written'?: number | null;
  'local_blk_write_time'?: number | null;
  'max_exec_time'?: number | null;
  'max_plan_time'?: number | null;
  'mean_exec_time'?: number | null;
  'mean_plan_time'?: number | null;
  'min_exec_time'?: number | null;
  'minmax_stats_since'?: Date | null;
  'min_plan_time'?: number | null;
  'plans'?: number | null;
  'query'?: string | null;
  'queryid'?: number | null;
  'rows'?: number | null;
  'shared_blk_read_time'?: number | null;
  'shared_blks_dirtied'?: number | null;
  'shared_blks_hit'?: number | null;
  'shared_blks_read'?: number | null;
  'shared_blks_written'?: number | null;
  'shared_blk_write_time'?: number | null;
  'stats_since'?: Date | null;
  'stddev_exec_time'?: number | null;
  'stddev_plan_time'?: number | null;
  'temp_blk_read_time'?: number | null;
  'temp_blks_read'?: number | null;
  'temp_blks_written'?: number | null;
  'temp_blk_write_time'?: number | null;
  'toplevel'?: boolean | null;
  'total_exec_time'?: number | null;
  'total_plan_time'?: number | null;
  'userid'?: any | null;
  'wal_bytes'?: string | null;
  'wal_fpi'?: number | null;
  'wal_records'?: number | null;
}
export interface pg_stat_statements_info {
  'dealloc'?: number | null;
  'stats_reset'?: Date | null;
}

export interface DB {
  "audit_log_entries": audit_log_entries;
  "custom_oauth_providers": custom_oauth_providers;
  "flow_state": flow_state;
  "identities": identities;
  "instances": instances;
  "mfa_amr_claims": mfa_amr_claims;
  "mfa_challenges": mfa_challenges;
  "mfa_factors": mfa_factors;
  "oauth_authorizations": oauth_authorizations;
  "oauth_clients": oauth_clients;
  "oauth_client_states": oauth_client_states;
  "oauth_consents": oauth_consents;
  "one_time_tokens": one_time_tokens;
  "refresh_tokens": refresh_tokens;
  "saml_providers": saml_providers;
  "saml_relay_states": saml_relay_states;
  "schema_migrations": schema_migrations;
  "sessions": sessions;
  "sso_domains": sso_domains;
  "sso_providers": sso_providers;
  "users": users;
  "webauthn_challenges": webauthn_challenges;
  "webauthn_credentials": webauthn_credentials;
  "buckets": buckets;
  "buckets_analytics": buckets_analytics;
  "buckets_vectors": buckets_vectors;
  "migrations": migrations;
  "objects": objects;
  "s3_multipart_uploads": s3_multipart_uploads;
  "s3_multipart_uploads_parts": s3_multipart_uploads_parts;
  "vector_indexes": vector_indexes;
  "decrypted_secrets": decrypted_secrets;
  "secrets": secrets;
  "memories": memories;
  "o_agentDeploy": o_agentDeploy;
  "o_agentWorkData": o_agentWorkData;
  "o_artStyle": o_artStyle;
  "o_assets": o_assets;
  "o_assets2Storyboard": o_assets2Storyboard;
  "o_assetsRole2Audio": o_assetsRole2Audio;
  "o_creditLedger": o_creditLedger;
  "o_event": o_event;
  "o_eventChapter": o_eventChapter;
  "o_image": o_image;
  "o_imageFlow": o_imageFlow;
  "o_modelPrompt": o_modelPrompt;
  "o_novel": o_novel;
  "o_project": o_project;
  "o_prompt": o_prompt;
  "o_script": o_script;
  "o_scriptAssets": o_scriptAssets;
  "o_setting": o_setting;
  "o_skillAttribution": o_skillAttribution;
  "o_skillList": o_skillList;
  "o_skillOwnership": o_skillOwnership;
  "o_storyboard": o_storyboard;
  "o_tasks": o_tasks;
  "o_topupOrder": o_topupOrder;
  "o_user": o_user;
  "o_vendorConfig": o_vendorConfig;
  "o_video": o_video;
  "o_videoTrack": o_videoTrack;
  "messages": messages;
  "schema_migrations": schema_migrations;
  "subscription": subscription;
  "pg_stat_statements": pg_stat_statements;
  "pg_stat_statements_info": pg_stat_statements_info;
}
