/**
 * Split a video sample into individual frames.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/split
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function split_sample_into_frames(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/split", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
