/**
 * Get list of transformation jobs.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project?limit=<integer>&offset=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function list_transformation_jobs(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project?limit=<integer>&offset=<integer>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
