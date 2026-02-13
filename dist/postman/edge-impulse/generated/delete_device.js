/**
 * Delete a device. When this device sends a new message to ingestion or connects to remote management the device will be recreated.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/device/:deviceId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function delete_device(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/device/:deviceId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "DELETE" });
}
