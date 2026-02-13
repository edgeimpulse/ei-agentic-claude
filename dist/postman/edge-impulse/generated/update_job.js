/**
 * Update a job.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/:jobId/update
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_job(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/:jobId/update", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
