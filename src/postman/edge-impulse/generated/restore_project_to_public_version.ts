/**
 * Restore a project to a certain public version. This can only applied to a project without data, and will overwrite your impulse and all settings.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/restore/from-public
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function restore_project_to_public_version(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/restore/from-public", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
