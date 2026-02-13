/**
 * Set the current name for a device.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/devices/:deviceId/rename
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function rename(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/devices/:deviceId/rename", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
