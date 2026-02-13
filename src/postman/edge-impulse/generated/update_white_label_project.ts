/**
 * White label admin only API to update project properties.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/projects/:projectId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function update_white_label_project(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/projects/:projectId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
