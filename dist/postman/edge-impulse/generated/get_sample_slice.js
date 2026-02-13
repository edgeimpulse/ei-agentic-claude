/**
 * Get a slice of a sample.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/slice?sliceStart=<integer>&sliceEnd=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_sample_slice(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/slice?sliceStart=<integer>&sliceEnd=<integer>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
