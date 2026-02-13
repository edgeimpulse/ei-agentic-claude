/**
 * Create a new device. If you set `ifNotExists` to `false` and the device already exists, the `deviceType` will be overwritten.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/devices/create
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function create_device(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/devices/create", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
