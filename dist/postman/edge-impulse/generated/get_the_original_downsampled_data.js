/**
 * Get the original, uncropped, downsampled data.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/original?limitPayloadValues=<integer>&zoomStart=<integer>&zoomEnd=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_the_original_downsampled_data(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/original?limitPayloadValues=<integer>&zoomStart=<integer>&zoomEnd=<integer>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
