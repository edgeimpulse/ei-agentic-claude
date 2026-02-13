/**
 * Get the last modification date for a project (will be upped when data is modified, or when an impulse is trained)
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/last-modification
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function last_modification(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/last-modification", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
