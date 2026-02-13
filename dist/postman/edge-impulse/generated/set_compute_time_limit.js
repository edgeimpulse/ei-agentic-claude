/**
 * Change the job compute time limit for the project. This function is only available through a JWT token, and is not available to all users.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/compute-time-limit
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function set_compute_time_limit(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/compute-time-limit", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
