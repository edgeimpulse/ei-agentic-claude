/**
 * Get all available Studio themes.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/themes
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_themes(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/themes", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
