/**
 * Cancel a running job.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/:jobId/cancel?forceCancel=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function cancel_job(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/:jobId/cancel?forceCancel=<string>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
