/**
 * Add an HMAC key. If you set `developmentKey` to `true` this flag will be removed from the current development HMAC key.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/hmackeys
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function add_hmac_key(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/hmackeys", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
