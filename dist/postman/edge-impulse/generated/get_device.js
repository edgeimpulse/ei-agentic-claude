/**
 * Retrieves a single device
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/device/:deviceId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_device(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/device/:deviceId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
