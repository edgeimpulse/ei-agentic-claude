/**
 * Get a theme given its unique identifier.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/themes/:themeId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_theme_by_id(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/themes/:themeId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
