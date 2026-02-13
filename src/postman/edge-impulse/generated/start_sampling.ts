/**
 * Start sampling on a device. This function returns immediately. Updates are streamed through the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/device/:deviceId/start-sampling
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function start_sampling(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/device/:deviceId/start-sampling", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
