/**
 * When segmenting a sample into smaller segments, store the segment length to ensure uniform segment lengths.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/store-segment-length
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function store_the_last_segment_length(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/store-segment-length", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
