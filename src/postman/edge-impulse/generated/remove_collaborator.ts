/**
 * Remove a collaborator to a project. Note that you cannot invoke this function if only a single collaborator is present.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/collaborators/remove
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function remove_collaborator(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/collaborators/remove", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
