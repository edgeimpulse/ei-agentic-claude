/**
 * Admin-only API to add a user to a project. If no user is provided, the current user is used.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/admin/projects/:projectId/members
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function add_user_to_a_project(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/projects/:projectId/members", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
