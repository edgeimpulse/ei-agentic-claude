/**
 * Set the bounding boxes for a sample
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/bounding-boxes
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function set_bounding_boxes(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/bounding-boxes", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
