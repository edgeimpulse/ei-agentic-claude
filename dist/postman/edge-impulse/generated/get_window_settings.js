/**
 * Get window settings
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/window-settings
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_window_settings(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/optimize/window-settings", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
