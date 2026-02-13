/**
 * Transfer ownership of a project to another organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/collaborators/transfer-ownership-org
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function transfer_ownership_organization(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/collaborators/transfer-ownership-org", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
