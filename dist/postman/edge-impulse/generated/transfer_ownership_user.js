/**
 * Transfer ownership of a project to another user.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/collaborators/transfer-ownership
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function transfer_ownership_user(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/collaborators/transfer-ownership", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
