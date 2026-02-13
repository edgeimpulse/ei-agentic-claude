/**
 * Predictions for every data explorer point (only available when using current impulse to populate data explorer)
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/predictions
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_data_explorer_predictions(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/predictions", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
