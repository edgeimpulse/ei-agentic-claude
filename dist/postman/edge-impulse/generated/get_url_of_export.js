/**
 * Get the URL to the exported artefacts for an export job of a project.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/export/get-url
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_url_of_export(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/export/get-url", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
