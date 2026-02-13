/**
 * Get all active jobs for this organization
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs?rootOnly=<boolean>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function list_active_jobs(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs?rootOnly=<boolean>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
