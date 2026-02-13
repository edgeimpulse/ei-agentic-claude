/**
 * Track objects between two samples. Source sample should have bounding boxes set.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/track-objects
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function track_objects(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/track-objects", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
