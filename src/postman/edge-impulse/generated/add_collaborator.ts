/**
 * Add a collaborator to a project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/collaborators/add
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function add_collaborator(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/collaborators/add", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
