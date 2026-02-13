/**
 * Simulates real world usage and returns performance metrics.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/performance-calibration
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function performance_calibration(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/performance-calibration", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
