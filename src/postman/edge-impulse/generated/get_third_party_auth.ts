/**
 * Get information about a third party authentication partner
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/third-party-auth/:authId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_third_party_auth(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/third-party-auth/:authId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
