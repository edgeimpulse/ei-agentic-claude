/**
 * Get a white label domain given its unique identifier.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier/domain
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_white_label_domain(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier/domain", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
