/**
 * Used internally (from a data pipeline) to upload a picture of the data explorer
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/screenshot
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function upload_a_data_explorer_screenshot(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/screenshot", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
