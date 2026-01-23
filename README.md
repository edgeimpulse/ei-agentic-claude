
# Edge Impulse Agentic CLI

This CLI was auto-generated from Edge Impulse's REST API configurations on Postman, designed for use by agents like Claude. It provides a comprehensive interface to Edge Impulse APIs, but individual commands may require testing and extension.

## Table of Contents
- [Screenshots](#screenshots)
- [Development & Production Usage](#development--production-usage)
- [Storing Your API Key](#storing-your-api-key-for-easier-cli-usage)
- [Auto-Generated CLI Commands](#auto-generated-cli-commands-extensible-secondary-layer)
- [Examples](#examples)
- [Testing](#testing)

## Screenshots

### CLI Usage
<img width="1111" height="571" alt="Screenshot 2026-01-23 at 16 54 01" src="https://github.com/user-attachments/assets/3fd11801-2948-48ad-b71f-f5117eb9a7f7" />

### Calling API on Block
<img width="1111" height="76" alt="Screenshot 2026-01-23 at 17 13 32" src="https://github.com/user-attachments/assets/8821b5da-021f-4fd3-a27d-0ee020ab5960" />

### Job Status
<img width="1207" height="76" alt="Screenshot 2026-01-23 at 17 17 13" src="https://github.com/user-attachments/assets/3adb2bd6-da51-4c0e-8f16-a61765c32af1" />

### Testing Framework
<img width="1207" height="274" alt="Screenshot 2026-01-23 at 17 29 24" src="https://github.com/user-attachments/assets/fe91d73b-ec09-4b4d-a669-1286fe43382a" />

# Development & Production Usage

## Universal CLI Launcher (Recommended)
Use the provided launcher script to automatically detect and run the CLI in the correct mode:

```
node launch-cli.mjs get-all-projects --api-key <your_api_key>
```

This script will:
- Use `ts-node` and `.ts` sources if available (development mode)
- Use compiled `.js` files from `dist` if running in production

## Manual Usage

### Development (TypeScript, ts-node)
Run CLI commands directly with TypeScript using ts-node:

```
npm run cli -- get-all-projects --api-key <your_api_key>
```

### Production (after build)
First, build the project:

```
npx tsc
```
Then run the compiled CLI from the `dist` directory:

```
node dist/cli.js get-all-projects --api-key <your_api_key>
```

# Storing Your API Key for Easier CLI Usage

You can avoid typing your API key every time by using one of these methods:

**1. Environment variable (recommended):**
Add this to your shell profile (e.g., `~/.zshrc` or `~/.bashrc`):
```sh
export EI_API_KEY=ei_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
Then run commands like:
```sh
npm run cli -- get-all-projects --api-key $EI_API_KEY
```

**2. .env file with `dotenv-cli`:**
Install dotenv-cli:
```sh
npm install -g dotenv-cli
```
Create a `.env` file:
```
EI_API_KEY=your_api_key_here
```
Run commands with:
```sh
dotenv -e .env -- npm run cli -- get-all-projects --api-key $EI_API_KEY
```

**3. Shell alias:**
Add to your shell profile:
```sh
alias eicli='npm run cli -- --api-key $EI_API_KEY'
```
Then run:
```sh
eicli get-all-projects

## New: `--params` JSON and optional `organizationId`

Many generated commands accept a `--params` option which takes a JSON string of parameters. For project listing we made `organizationId` optional — if supplied the CLI will call the organization-scoped endpoint, otherwise it will call the user-facing projects endpoint.

Examples:

```sh
# List projects for API key (no organization required)
node launch-cli.mjs get-projects --api-key $EI_API_KEY --params '{"type":"classification"}'

# List projects for an organization (organizationId is optional)
node launch-cli.mjs get-projects --api-key $EI_API_KEY --params '{"organizationId":"1478","type":"classification"}'
```

The same `--params` JSON pattern is used by other commands — e.g., training commands accept `projectId`, `learnId`, and training parameters through `--params`.

If you prefer top-level flags, many commands still accept specific flags generated in the CLI files (check `--help` for the command).
```


# Auto-Generated CLI Commands (Extensible Secondary Layer)

All Edge Impulse API endpoints are available as CLI commands, auto-generated from the Postman collection. This auto-generation is designed as a secondary, extensible layer—making it easy to add, update, or extend commands as the API evolves.

**Primary focus:** This repo is architected for agentic workflows, enabling Claude (or other LLM agents) to interact with Edge Impulse via a robust, typed interface. The CLI commands are a convenience layer for direct use and future extension.

**Usage Pattern:**
```
npm run cli -- <command-name> --api-key <your_api_key> [--params '{"param1":"value1",...}']
```

**How to discover available commands:**
- All generated commands are in `src/postman/edge-impulse/generated/cli-commands/` (replace underscores with dashes for CLI usage).
- Run `npm run cli -- --help` to see all registered commands and options.
- Use the exact generated command name (e.g., `get-all-projects`, `add-api-key`).

**Unified option:** All commands require `--api-key <your_api_key>`

**Example:**
```
npm run cli -- get-all-projects --api-key <your_api_key>
npm run cli -- add-api-key --api-key <your_api_key> --params '{"projectId":123,"name":"test"}'
npm run cli -- train-model-keras --api-key <your_api_key> --params '{"projectId":123,"learnId":456,"trainingCycles":10}'
```

**Troubleshooting:**
- If a command is not recognized, check the generated file name and use the corresponding CLI name.
- If no commands appear in `--help`, ensure you have built the project (`npx tsc`) and that the generator does not include `.ts` in import paths.
- For advanced usage, see the generated files or the Edge Impulse API documentation.

**Tip:** You can add a test script to list all available commands:
```json
"scripts": {
  ...,
  "cli-list": "npm run cli -- --help"
}
```

## Complete CLI Command Reference

The CLI provides access to all Edge Impulse API endpoints. Run `node launch-cli.mjs --help` to see the full list. Here are all available commands:

### Core Commands
- `accept-terms-of-service` - Auto-generated command for accept_terms_of_service
- `activate-current-user` - Auto-generated command for activate_current_user
- `activate-user` - Auto-generated command for activate_user
- `activate-user-by-third-party-activation-code` - Auto-generated command for activate_user_by_third_party_activation_code
- `add-a-collaborator-to-a-project-within-an-organisation` - Auto-generated command for add_a_collaborator_to_a_project_within_an_organisation
- `add-a-storage-bucket` - Auto-generated command for add_a_storage_bucket
- `add-api-key` - Auto-generated command for add_api_key
- `add-collaborator` - Auto-generated command for add_collaborator
- `add-current-user-to-a-project` - Auto-generated command for add_current_user_to_a_project
- `add-data-items-from-bucket` - Auto-generated command for add_data_items_from_bucket
- `add-deploy-block` - Auto-generated command for add_deploy_block
- `add-dsp-block` - Auto-generated command for add_dsp_block
- `add-files` - Auto-generated command for add_files
- `add-hmac-key` - Auto-generated command for add_hmac_key
- `add-keywords-and-noise` - Auto-generated command for add_keywords_and_noise
- `add-member` - Auto-generated command for add_member
- `add-new-data` - Auto-generated command for add_new_data
- `add-note` - Auto-generated command for add_note
- `add-secret` - Auto-generated command for add_secret
- `add-transfer-learning-block` - Auto-generated command for add_transfer_learning_block
- `add-transformation-block` - Auto-generated command for add_transformation_block
- `add-user-to-a-project` - Auto-generated command for add_user_to_a_project
- `admin-endpoint` - Auto-generated command for admin_endpoint
- `anomaly-information` - Auto-generated command for anomaly_information
- `anomaly-metadata` - Auto-generated command for anomaly_metadata
- `anomaly-settings` - Auto-generated command for anomaly_settings
- `auto-label-an-image` - Auto-generated command for auto_label_an_image
- `autotune-dsp-parameters` - Auto-generated command for autotune_dsp_parameters
- `build-on-device-model` - Auto-generated command for build_on_device_model
- `build-organizational-on-device-model` - Auto-generated command for build_organizational_on_device_model
- `bulk-update-metadata` - Auto-generated command for bulk_update_metadata
- `cancel-job` - Auto-generated command for cancel_job
- `change-dataset` - Auto-generated command for change_dataset
- `change-password` - Auto-generated command for change_password
- `change-password-current-user` - Auto-generated command for change_password_current_user
- `check-data-explorer-features` - Auto-generated command for check_data_explorer_features
- `check-evaluate-job-result-cache` - Auto-generated command for check_evaluate_job_result_cache
- `classify` - Auto-generated command for classify
- `classify-job-result` - Auto-generated command for classify_job_result
- `classify-sample` - Auto-generated command for classify_sample
- `clear-checklist-for-data` - Auto-generated command for clear_checklist_for_data
- `clear-data-explorer` - Auto-generated command for clear_data_explorer
- `clear-dsp-block` - Auto-generated command for clear_dsp_block
- `clear-failed-transform-jobs` - Auto-generated command for clear_failed_transform_jobs
- `clear-performance-calibration-parameters` - Auto-generated command for clear_performance_calibration_parameters
- `convert-current-evaluation-user` - Auto-generated command for convert_current_evaluation_user
- `count-samples` - Auto-generated command for count_samples
- `create-a-new-organization` - Auto-generated command for create_a_new_organization
- `create-a-new-white-label` - Auto-generated command for create_a_new_white_label
- `create-developer-profile` - Auto-generated command for create_developer_profile
- `create-device` - Auto-generated command for create_device
- `create-evaluation-user` - Auto-generated command for create_evaluation_user
- `create-impulse` - Auto-generated command for create_impulse
- `create-new-block-version` - Auto-generated command for create_new_block_version
- `create-new-empty-project` - Auto-generated command for create_new_empty_project
- `create-new-organization` - Auto-generated command for create_new_organization
- `create-new-organization-within-white-label-context` - Auto-generated command for create_new_organization_within_white_label_context
- `create-new-project` - Auto-generated command for create_new_project
- `create-or-login-a-user` - Auto-generated command for create_or_login_a_user
- `create-pipeline` - Auto-generated command for create_pipeline
- `create-pre-signed-s3-upload-link` - Auto-generated command for create_pre_signed_s3_upload_link
- `create-third-party-auth` - Auto-generated command for create_third_party_auth
- `create-trial` - Auto-generated command for create_trial
- `create-upload-portal` - Auto-generated command for create_upload_portal
- `create-user` - Auto-generated command for create_user
- `crop-sample` - Auto-generated command for crop_sample
- `delete-a-project` - Auto-generated command for delete_a_project
- `delete-a-user` - Auto-generated command for delete_a_user
- `delete-an-organization` - Auto-generated command for delete_an_organization
- `delete-create-project-file` - Auto-generated command for delete_create_project_file
- `delete-current-user` - Auto-generated command for delete_current_user
- `delete-data` - Auto-generated command for delete_data
- `delete-deploy-block` - Auto-generated command for delete_deploy_block
- `delete-device` - Auto-generated command for delete_device
- `delete-dsp-block` - Auto-generated command for delete_dsp_block
- `delete-eon-tuner-state` - Auto-generated command for delete_eon_tuner_state
- `delete-file` - Auto-generated command for delete_file
- `delete-file-from-portal` - Auto-generated command for delete_file_from_portal
- `delete-impulse` - Auto-generated command for delete_impulse
- `delete-photo` - Auto-generated command for delete_photo
- `delete-pipeline` - Auto-generated command for delete_pipeline
- `delete-theme-by-id` - Auto-generated command for delete_theme_by_id
- `delete-third-party-auth` - Auto-generated command for delete_third_party_auth
- `delete-transfer-learning-block` - Auto-generated command for delete_transfer_learning_block
- `delete-transformation-block` - Auto-generated command for delete_transformation_block
- `delete-transformation-job` - Auto-generated command for delete_transformation_job
- `delete-upload-portal` - Auto-generated command for delete_upload_portal
- `delete-user` - Auto-generated command for delete_user
- `delete-versions` - Auto-generated command for delete_versions
- `deletes-a-white-label` - Auto-generated command for deletes_a_white_label
- `deploy-pretrained-model` - Auto-generated command for deploy_pretrained_model
- `deployment-targets` - Auto-generated command for deployment_targets
- `deployment-targets-data-sources` - Auto-generated command for deployment_targets_data_sources
- `disable-multiple-samples` - Auto-generated command for disable_multiple_samples
- `disable-sample` - Auto-generated command for disable_sample
- `discourse` - Auto-generated command for discourse
- `download` - Auto-generated command for download
- `download-data` - Auto-generated command for download_data
- `download-dsp-data` - Auto-generated command for download_dsp_data
- `download-dsp-labels` - Auto-generated command for download_dsp_labels
- `download-file` - Auto-generated command for download_file
- `download-file-from-portal` - Auto-generated command for download_file_from_portal
- `download-keras-data-export` - Auto-generated command for download_keras_data_export
- `download-keras-export` - Auto-generated command for download_keras_export
- `download-labels` - Auto-generated command for download_labels
- `download-logs` - Auto-generated command for download_logs
- `download-trained-model` - Auto-generated command for download_trained_model
- `edit-label` - Auto-generated command for edit_label
- `edit-labels-for-multiple-samples` - Auto-generated command for edit_labels_for_multiple_samples
- `enable-multiple-samples` - Auto-generated command for enable_multiple_samples
- `enable-sample` - Auto-generated command for enable_sample
- `evaluate` - Auto-generated command for evaluate
- `evaluate-job-result` - Auto-generated command for evaluate_job_result
- `export-data-as-wav` - Auto-generated command for export_data_as_wav
- `export-keras-block` - Auto-generated command for export_keras_block
- `export-keras-block-data` - Auto-generated command for export_keras_block_data
- `export-original-data` - Auto-generated command for export_original_data
- `feature-importance` - Auto-generated command for feature_importance
- `feature-labels` - Auto-generated command for feature_labels
- `features-for-sample` - Auto-generated command for features_for_sample
- `find-a-user` - Auto-generated command for find_a_user
- `find-segments` - Auto-generated command for find_segments
- `find-syntiant-posterior-parameters` - Auto-generated command for find_syntiant_posterior_parameters
- `generate-data-explorer-features` - Auto-generated command for generate_data_explorer_features
- `generate-features` - Auto-generated command for generate_features
- `get-a-white-label-project` - Auto-generated command for get_a_white_label_project
- `get-a-white-label-user` - Auto-generated command for get_a_white_label_user
- `get-all-organizations` - Auto-generated command for get_all_organizations
- `get-all-organizations-within-a-white-label` - Auto-generated command for get_all_organizations_within_a_white_label
- `get-all-projects` - Auto-generated command for get_all_projects
- `get-all-third-party-auth` - Auto-generated command for get_all_third_party_auth
- `get-all-user-ids` - Auto-generated command for get_all_user_ids
- `get-all-user-ids-active-last-30-days` - Auto-generated command for get_all_user_ids_active_last_30_days
- `get-all-users` - Auto-generated command for get_all_users
- `get-all-white-label-projects` - Auto-generated command for get_all_white_label_projects
- `get-all-white-label-users` - Auto-generated command for get_all_white_label_users
- `get-api-keys` - Auto-generated command for get_api_keys
- `get-buckets` - Auto-generated command for get_buckets
- `get-buckets-current-user` - Auto-generated command for get_buckets_current_user
- `get-config` - Auto-generated command for get_config
- `get-current-user` - Auto-generated command for get_current_user
- `get-data-axes-summary` - Auto-generated command for get_data_axes_summary
- `get-data-explorer-features` - Auto-generated command for get_data_explorer_features
- `get-data-explorer-predictions` - Auto-generated command for get_data_explorer_predictions
- `get-data-explorer-settings` - Auto-generated command for get_data_explorer_settings
- `get-data-metadata` - Auto-generated command for get_data_metadata
- `get-dataset` - Auto-generated command for get_dataset
- `get-deploy-blocks` - Auto-generated command for get_deploy_blocks
- `get-deployment-info` - Auto-generated command for get_deployment_info
- `get-development-keys` - Auto-generated command for get_development_keys
- `get-device` - Auto-generated command for get_device
- `get-downloads` - Auto-generated command for get_downloads
- `get-dsp-blocks` - Auto-generated command for get_dsp_blocks
- `get-global-metrics` - Auto-generated command for get_global_metrics
- `get-global-white-label-metrics` - Auto-generated command for get_global_white_label_metrics
- `get-ground-truth` - Auto-generated command for get_ground_truth
- `get-hmac-keys` - Auto-generated command for get_hmac_keys
- `get-image-file` - Auto-generated command for get_image_file
- `get-impulse` - Auto-generated command for get_impulse
- `get-impulse-blocks` - Auto-generated command for get_impulse_blocks
- `get-impulse-including-disabled-blocks` - Auto-generated command for get_impulse_including_disabled_blocks
- `get-job-status` - Auto-generated command for get_job_status
- `get-jwt-token` - Auto-generated command for get_jwt_token
- `get-logs` - Auto-generated command for get_logs
- `get-metadata` - Auto-generated command for get_metadata
- `get-notes` - Auto-generated command for get_notes
- `get-organization-information` - Auto-generated command for get_organization_information
- `get-organizations` - Auto-generated command for get_organizations
- `get-parameter-sets` - Auto-generated command for get_parameter_sets
- `get-parameters` - Auto-generated command for get_parameters
- `get-pipeline` - Auto-generated command for get_pipeline
- `get-pretrained-model` - Auto-generated command for get_pretrained_model
- `get-processed-sample-slice` - Auto-generated command for get_processed_sample_slice
- `get-project` - Auto-generated command for get_project
- `get-project-sample-metadata` - Auto-generated command for get_project_sample_metadata
- `get-projects` - Auto-generated command for get_projects
- `get-public-metrics` - Auto-generated command for get_public_metrics
- `get-raw-result` - Auto-generated command for get_raw_result
- `get-raw-sample` - Auto-generated command for get_raw_sample
- `get-raw-sample-slice` - Auto-generated command for get_raw_sample_slice
- `get-results-from-dsp-autotuner` - Auto-generated command for get_results_from_dsp_autotuner
- `get-sample` - Auto-generated command for get_sample
- `get-sample-slice` - Auto-generated command for get_sample_slice
- `get-secrets` - Auto-generated command for get_secrets
- `get-socket-token` - Auto-generated command for get_socket_token
- `get-socket-token-for-an-organization` - Auto-generated command for get_socket_token_for_an_organization
- `get-status` - Auto-generated command for get_status
- `get-studio-api-containers-health` - Auto-generated command for get_studio_api_containers_health
- `get-studio-web-containers-health` - Auto-generated command for get_studio_web_containers_health
- `get-syntiant-posterior-parameters` - Auto-generated command for get_syntiant_posterior_parameters
- `get-tflite-profile-result` - Auto-generated command for get_tflite_profile_result
- `get-the-interval-in-ms-of-the-training-data` - Auto-generated command for get_the_interval_in_ms_of_the_training_data
- `get-the-original-downsampled-data` - Auto-generated command for get_the_original_downsampled_data
- `get-theme-by-id` - Auto-generated command for get_theme_by_id
- `get-themes` - Auto-generated command for get_themes
- `get-third-party-auth` - Auto-generated command for get_third_party_auth
- `get-transfer-learning-blocks` - Auto-generated command for get_transfer_learning_blocks
- `get-transformation-blocks` - Auto-generated command for get_transformation_blocks
- `get-transformation-job-status` - Auto-generated command for get_transformation_job_status
- `get-trial-logs` - Auto-generated command for get_trial_logs
- `get-url-of-export` - Auto-generated command for get_url_of_export
- `get-user` - Auto-generated command for get_user
- `get-user-by-third-party-activation-code` - Auto-generated command for get_user_by_third_party_activation_code
- `get-user-metrics` - Auto-generated command for get_user_metrics
- `get-user-password-state` - Auto-generated command for get_user_password_state
- `get-video-file` - Auto-generated command for get_video_file
- `get-wav-file` - Auto-generated command for get_wav_file
- `get-white-label-domain` - Auto-generated command for get_white_label_domain
- `get-white-label-user-metrics` - Auto-generated command for get_white_label_user_metrics
- `get-window-settings` - Auto-generated command for get_window_settings
- `give-access-to-project` - Auto-generated command for give_access_to_project
- `hide-dataset` - Auto-generated command for hide_dataset
- `invite-member` - Auto-generated command for invite_member
- `job-summary` - Auto-generated command for job_summary
- `keras-information` - Auto-generated command for keras_information
- `keras-metadata` - Auto-generated command for keras_metadata
- `keras-settings` - Auto-generated command for keras_settings
- `last-modification` - Auto-generated command for last_modification
- `launch-getting-started-wizard` - Auto-generated command for launch_getting_started_wizard
- `list-active-jobs` - Auto-generated command for list_active_jobs
- `list-active-organizations` - Auto-generated command for list_active_organizations
- `list-active-projects` - Auto-generated command for list_active_projects
- `list-all-jobs` - Auto-generated command for list_all_jobs
- `list-archived-pipelines` - Auto-generated command for list_archived_pipelines
- `list-data` - Auto-generated command for list_data
- `list-emails` - Auto-generated command for list_emails
- `list-files` - Auto-generated command for list_files
- `list-files-in-portal` - Auto-generated command for list_files_in_portal
- `list-finished-jobs` - Auto-generated command for list_finished_jobs
- `list-pipelines` - Auto-generated command for list_pipelines
- `list-public-projects` - Auto-generated command for list_public_projects
- `list-public-versions` - Auto-generated command for list_public_versions
- `list-samples` - Auto-generated command for list_samples
- `list-storage-buckets` - Auto-generated command for list_storage_buckets
- `list-the-registered-white-labels` - Auto-generated command for list_the_registered_white_labels
- `list-transformation-jobs` - Auto-generated command for list_transformation_jobs
- `list-upload-portals` - Auto-generated command for list_upload_portals
- `list-versions` - Auto-generated command for list_versions
- `lists-devices` - Auto-generated command for lists_devices
- `make-a-version-public` - Auto-generated command for make_a_version_public
- `make-version-private` - Auto-generated command for make_version_private
- `move-multiple-samples` - Auto-generated command for move_multiple_samples
- `move-sample` - Auto-generated command for move_sample
- `object-detection-label-queue` - Auto-generated command for object_detection_label_queue
- `object-detection-label-queue-count` - Auto-generated command for object_detection_label_queue_count
- `optimize-model` - Auto-generated command for optimize_model
- `organization-information` - Auto-generated command for organization_information
- `performance-calibration` - Auto-generated command for performance_calibration
- `portal-info` - Auto-generated command for portal_info
- `preview-file` - Auto-generated command for preview_file
- `profile-custom-dsp-block` - Auto-generated command for profile_custom_dsp_block
- `profile-pretrained-model` - Auto-generated command for profile_pretrained_model
- `profile-tflite-model` - Auto-generated command for profile_tflite_model
- `project-information` - Auto-generated command for project_information
- `readme-io` - Auto-generated command for readme_io
- `rebalance-dataset` - Auto-generated command for rebalance_dataset
- `refresh-data` - Auto-generated command for refresh_data
- `remove-all-samples` - Auto-generated command for remove_all_samples
- `remove-all-samples-by-category` - Auto-generated command for remove_all_samples_by_category
- `remove-collaborator` - Auto-generated command for remove_collaborator
- `remove-current-user-from-a-project` - Auto-generated command for remove_current_user_from_a_project
- `remove-hmac-key` - Auto-generated command for remove_hmac_key
- `remove-member` - Auto-generated command for remove_member
- `remove-multiple-samples` - Auto-generated command for remove_multiple_samples
- `remove-note` - Auto-generated command for remove_note
- `remove-organization` - Auto-generated command for remove_organization
- `remove-project` - Auto-generated command for remove_project
- `remove-sample` - Auto-generated command for remove_sample
- `remove-storage-bucket` - Auto-generated command for remove_storage_bucket
- `remove-user-from-a-project` - Auto-generated command for remove_user_from_a_project
- `rename` - Auto-generated command for rename
- `rename-file-from-portal` - Auto-generated command for rename_file_from_portal
- `rename-sample` - Auto-generated command for rename_sample
- `request-activation-code` - Auto-generated command for request_activation_code
- `request-reset-password` - Auto-generated command for request_reset_password
- `resend-invitation` - Auto-generated command for resend_invitation
- `reset-password` - Auto-generated command for reset_password
- `restore-project-to-public-version` - Auto-generated command for restore_project_to_public_version
- `restore-project-to-version` - Auto-generated command for restore_project_to_version
- `retrain` - Auto-generated command for retrain
- `retrieve-upload-portal-information` - Auto-generated command for retrieve_upload_portal_information
- `retrieves-available-transfer-learning-models` - Auto-generated command for retrieves_available_transfer_learning_models
- `retrieves-dsp-block-parameters` - Auto-generated command for retrieves_dsp_block_parameters
- `retrieves-the-eon-tuner-state` - Auto-generated command for retrieves_the_eon_tuner_state
- `retry-connection-to-dsp-block` - Auto-generated command for retry_connection_to_dsp_block
- `retry-failed-transform-jobs` - Auto-generated command for retry_failed_transform_jobs
- `retry-processing` - Auto-generated command for retry_processing
- `retry-transformation-file` - Auto-generated command for retry_transformation_file
- `retry-transformation-upload-job` - Auto-generated command for retry_transformation_upload_job
- `revoke-api-key` - Auto-generated command for revoke_api_key
- `rotate-upload-portal-token` - Auto-generated command for rotate_upload_portal_token
- `run-pipelines` - Auto-generated command for run_pipelines
- `sample-of-trained-features` - Auto-generated command for sample_of_trained_features
- `save-parameters-for-pretrained-model` - Auto-generated command for save_parameters_for_pretrained_model
- `save-performance-calibration-parameters` - Auto-generated command for save_performance_calibration_parameters
- `score-trial` - Auto-generated command for score_trial
- `search-space` - Auto-generated command for search_space
- `segment-sample` - Auto-generated command for segment_sample
- `set-bounding-boxes` - Auto-generated command for set_bounding_boxes
- `set-compute-time-limit` - Auto-generated command for set_compute_time_limit
- `set-config` - Auto-generated command for set_config
- `set-data-explorer-settings` - Auto-generated command for set_data_explorer_settings
- `set-dsp-file-size-limit` - Auto-generated command for set_dsp_file_size_limit
- `set-member-datasets` - Auto-generated command for set_member_datasets
- `set-member-role` - Auto-generated command for set_member_role
- `set-password-for-sso-user` - Auto-generated command for set_password_for_sso_user
- `set-sample-metadata` - Auto-generated command for set_sample_metadata
- `set-syntiant-posterior-parameters` - Auto-generated command for set_syntiant_posterior_parameters
- `sets-eon-tuner-primary-model` - Auto-generated command for sets_eon_tuner_primary_model
- `split-sample-into-frames` - Auto-generated command for split_sample_into_frames
- `start-sampling` - Auto-generated command for start_sampling
- `start-transformation-job` - Auto-generated command for start_transformation_job
- `store-the-last-segment-length` - Auto-generated command for store_the_last_segment_length
- `test-pretrained-model` - Auto-generated command for test_pretrained_model
- `track-objects` - Auto-generated command for track_objects
- `train-model-anomaly` - Auto-generated command for train_model_anomaly
- `train-model-keras` - Auto-generated command for train_model_keras
- `trained-features` - Auto-generated command for trained_features
- `trained-features-for-sample` - Auto-generated command for trained_features_for_sample
- `transfer-ownership-organization` - Auto-generated command for transfer_ownership_organization
- `transfer-ownership-user` - Auto-generated command for transfer_ownership_user
- `update-block-version-details` - Auto-generated command for update_block_version_details
- `update-config` - Auto-generated command for update_config
- `update-current-user` - Auto-generated command for update_current_user
- `update-data-metadata` - Auto-generated command for update_data_metadata
- `update-dataset` - Auto-generated command for update_dataset
- `update-deploy-block` - Auto-generated command for update_deploy_block
- `update-deployment-targets` - Auto-generated command for update_deployment_targets
- `update-dsp-block` - Auto-generated command for update_dsp_block
- `update-job` - Auto-generated command for update_job
- `update-note` - Auto-generated command for update_note
- `update-organization` - Auto-generated command for update_organization
- `update-pipeline` - Auto-generated command for update_pipeline
- `update-project` - Auto-generated command for update_project
- `update-storage-bucket` - Auto-generated command for update_storage_bucket
- `update-tags` - Auto-generated command for update_tags
- `update-theme-colors` - Auto-generated command for update_theme_colors
- `update-theme-favicon` - Auto-generated command for update_theme_favicon
- `update-theme-logos` - Auto-generated command for update_theme_logos
- `update-third-party-auth` - Auto-generated command for update_third_party_auth
- `update-transfer-learning-block` - Auto-generated command for update_transfer_learning_block
- `update-transformation-block` - Auto-generated command for update_transformation_block
- `update-transformation-job` - Auto-generated command for update_transformation_job
- `update-upload-portal` - Auto-generated command for update_upload_portal
- `update-user` - Auto-generated command for update_user
- `update-version` - Auto-generated command for update_version
- `update-white-label-project` - Auto-generated command for update_white_label_project
- `update-white-label-user` - Auto-generated command for update_white_label_user
- `upload-a-custom-block` - Auto-generated command for upload_a_custom_block
- `upload-a-data-explorer-screenshot` - Auto-generated command for upload_a_data_explorer_screenshot
- `upload-a-pretrained-model` - Auto-generated command for upload_a_pretrained_model
- `upload-image-for-readme` - Auto-generated command for upload_image_for_readme
- `upload-keras-files` - Auto-generated command for upload_keras_files
- `upload-organization-header-image` - Auto-generated command for upload_organization_header_image
- `upload-organization-logo` - Auto-generated command for upload_organization_logo
- `upload-performance-calibration-audio-files` - Auto-generated command for upload_performance_calibration_audio_files
- `upload-photo` - Auto-generated command for upload_photo
- `user-cdn-resource` - Auto-generated command for user_cdn_resource
- `verify-bucket-connectivity` - Auto-generated command for verify_bucket_connectivity
- `verify-custom-dsp-block` - Auto-generated command for verify_custom_dsp_block
- `verify-reset-password-code` - Auto-generated command for verify_reset_password_code
- `verify-upload-portal-information` - Auto-generated command for verify_upload_portal_information
- `version-project` - Auto-generated command for version_project
- `view-file-from-portal` - Auto-generated command for view_file_from_portal
- `wait-job` - Poll a job until completion: --projectId <id> --jobId <id>
- `white-label-information` - Auto-generated command for white_label_information

### Key Training & Workflow Commands
- `train-model-keras` - Start Keras model training
- `optimize-model` - Optimize a trained model
- `retrain` - Retrain a model with new parameters
- `get-job-status` - Check job status
- `wait-job` - Poll job until completion
- `get-projects` - List user projects
- `get-impulse` - Get impulse configuration
- `evaluate` - Evaluate model performance

# Edge Impulse Claude Agentic Example

This project demonstrates a minimal, agentic workflow for Edge Impulse using a TypeScript CLI and Claude. You can list projects, train Keras blocks, and (optionally) fetch evaluation metrics.

## Features
- List Edge Impulse projects
- Start model training with advanced Keras config
- Check training job status
- (Optional) Fetch evaluation metrics (if available via API)
- Typed API clients, robust error handling

## Quick Start
1. **Connect Claude to the Postman MCP server:**
  ```sh
  claude mcp add --transport http postman https://mcp.postman.com/code \
    --header "Authorization: Bearer YOUR_POSTMAN_API_KEY"
  ```
2. **Prompt your agent:**
  > Build a CLI that lists my Edge Impulse projects and starts a training job using the Edge Impulse API collection.
3. **Generated files:**
  - src/postman/edge-impulse/projects/list-projects/client.ts
  - src/postman/edge-impulse/projects/upload-data/client.ts
  - src/postman/edge-impulse/training/start-training/client.ts
  - src/postman/edge-impulse/shared/types.ts
  - src/cli.ts
4. **Install dependencies:**
  ```sh
  npm install
  ```
5. **Run the CLI:**
  ```sh
  npm run cli -- get-all-projects --api-key <your_api_key>
  npm run cli -- add-api-key --api-key <your_api_key> --params '{"projectId":123,"name":"test"}'
  npm run cli -- train-model-keras --api-key <your_api_key> --params '{"projectId":123,"learnId":456,"trainingCycles":10}'
  ```

## Agentic Workflow Example
1. **List projects:**
  ```sh
  npm run cli -- get-all-projects --api-key <your_api_key>
  ```
2. **Start training:**
  ```sh
  npm run cli -- train-model-keras --api-key <your_api_key> --params '{"projectId":123,"learnId":456}'
  ```
 
    ### Start training with `--params` (JSON)

    You can pass the full training request as a JSON string using `--params`. This is useful when invoking from agents or scripts.

    ```sh
    # start training (Keras) with training parameters in --params
    npm run cli -- train-model-keras --api-key <your_api_key> \
      --params '{"projectId":123,"learnId":456,"mode":"visual","trainingCycles":30,"learningRate":0.01,"batchSize":64}'

    # some generators use the command name `start-training` — same pattern applies
    npm run cli -- start-training --api-key <your_api_key> \
      --params '{"projectId":123,"learnId":456,"mode":"visual","trainingCycles":30}'
    ```
3. **Check job status:**
  ```sh
  npm run cli -- get-job-status --api-key <your_api_key> --params '{"projectId":123,"jobId":789}'
  ```
4. **(Optional) Fetch evaluation metrics:**
  ```sh
  npm run cli -- evaluate-block --api-key <your_api_key> --params '{"projectId":123,"learnId":456}'
  ```

## Advanced: Configure Keras Block Parameters
You (or Claude) can configure any Keras block parameter at training time using the CLI's `--param` option. Example:
```sh
npm run cli -- start-training --api-key <your_api_key> --projectId <projectId> --learnId <learnId> \
  --mode visual \
  --param trainingCycles=50 learningRate=0.005 batchSize=64 autoClassWeights=true selectedModelType=int8
```
See the [Edge Impulse API docs](https://docs.edgeimpulse.com/apis/studio/jobs/train-model-keras) for a full list.

## Notes & Troubleshooting
- If you get a 404 on job status or evaluation, wait a few seconds and retry.
- Confirm your learnId is valid by checking the Edge Impulse dashboard.
- All training and evaluation results are always available in the dashboard, even if not exposed via API.
- Evaluation metrics may not be available via public API for all blocks.

## Testing

This repository includes a small smoke test and unit tests to help contributors validate changes quickly.

- Smoke test: a lightweight Node script that asserts key CLI help text is present. Run:

```bash
npm install
npm run smoke
```

- Unit tests: written with Vitest. Run:

```bash
npm test
```

Files of interest:
- `scripts/smoke-test.js` — smoke script that runs basic CLI help checks.
- `test/cli.spec.ts` — Vitest tests asserting presence of key commands (`train-model-keras`, `wait-job`).

Notes:
- The project uses ESM (`type: module`), so the smoke script uses ESM imports.
- CI: consider adding a GitHub Actions workflow to run `npm ci && npm run smoke && npm test` on PRs.
