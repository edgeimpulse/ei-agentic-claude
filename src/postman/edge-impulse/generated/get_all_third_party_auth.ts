/**
 * Get information about all third party authentication partners
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/third-party-auth
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_all_third_party_auth(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/third-party-auth", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
