/**
 * Retrieve the downloads for a project.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/downloads
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_downloads(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/downloads", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
