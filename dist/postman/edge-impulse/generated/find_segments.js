/**
 * Find start and end times for all non-noise events in a sample
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/find-segments
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function find_segments(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/find-segments", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
