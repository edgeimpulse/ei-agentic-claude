/**
 * Delete a version. This does not delete the version from cold storage.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/versions/:versionId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function delete_versions(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/versions/:versionId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "DELETE" });
}
