/**
 * Updates a version, this only updates fields that were set in the body.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/versions/:versionId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_version(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/versions/:versionId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
