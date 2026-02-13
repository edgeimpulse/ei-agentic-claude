/**
 * Retrieve all the information about this white label.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function white_label_information(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
