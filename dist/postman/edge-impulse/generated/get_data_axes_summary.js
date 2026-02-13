/**
 * Get a list of axes that are present in the training data.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/data-axes?includeDisabled=<boolean>&includeNotProcessed=<boolean>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_data_axes_summary(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/data-axes?includeDisabled=<boolean>&includeNotProcessed=<boolean>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
