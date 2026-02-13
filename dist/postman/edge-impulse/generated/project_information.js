/**
 * List all information about this project.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function project_information(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
