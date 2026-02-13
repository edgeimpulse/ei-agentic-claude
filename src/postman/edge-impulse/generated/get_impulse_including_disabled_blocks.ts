/**
 * Retrieve the impulse for this project including disabled blocks
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/impulse/all
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_impulse_including_disabled_blocks(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/impulse/all", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
