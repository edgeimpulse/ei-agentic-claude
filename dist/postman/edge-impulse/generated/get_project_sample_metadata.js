/**
 * Get metadata for all samples in a project.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/metadata?category=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_project_sample_metadata(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/metadata?category=<string>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
