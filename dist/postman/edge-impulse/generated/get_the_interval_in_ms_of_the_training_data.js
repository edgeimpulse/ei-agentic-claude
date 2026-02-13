/**
 * Get the interval of the training data; if multiple intervals are present, the interval of the longest data item is returned.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/data-interval
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_the_interval_in_ms_of_the_training_data(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/data-interval", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
