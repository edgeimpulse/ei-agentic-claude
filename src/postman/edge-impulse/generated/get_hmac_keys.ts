/**
 * Retrieve all HMAC keys.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/hmackeys
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_hmac_keys(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/hmackeys", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
