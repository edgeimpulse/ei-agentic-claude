/**
 * Update config
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/config
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_config(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/optimize/config", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
