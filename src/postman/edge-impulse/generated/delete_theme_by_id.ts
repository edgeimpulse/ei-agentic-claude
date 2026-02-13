/**
 * Delete a theme given its unique identifier.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/themes/:themeId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function delete_theme_by_id(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/themes/:themeId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
