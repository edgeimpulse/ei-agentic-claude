/**
 * List all devices for this project. Devices get included here if they connect to the remote management API or if they have sent data to the ingestion API and had the `device_id` field set.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/devices
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function lists_devices(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/devices", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
