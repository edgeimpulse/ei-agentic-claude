/**
 * Get all finished jobs for this organization
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/history?startDate=<dateTime>&endDate=<dateTime>&limit=<integer>&offset=<integer>&rootOnly=<boolean>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function list_finished_jobs(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/history?startDate=<dateTime>&endDate=<dateTime>&limit=<integer>&offset=<integer>&rootOnly=<boolean>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
