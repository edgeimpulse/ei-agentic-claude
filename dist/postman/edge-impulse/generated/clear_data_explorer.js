/**
 * Remove the current data explorer state
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/clear
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function clear_data_explorer(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/clear", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
