/**
 * Deletes the white label with the given id.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function deletes_a_white_label(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
