/**
 * Get a summary of jobs, grouped by key. Used to report to users how much compute they've used.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/summary?startDate=<dateTime>&endDate=<dateTime>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function job_summary(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/summary?startDate=<dateTime>&endDate=<dateTime>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
