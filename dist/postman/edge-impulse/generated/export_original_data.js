/**
 * Export all the data in the project as it was uploaded to Edge Impulse.  Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/export/original
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function export_original_data(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/export/original", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
