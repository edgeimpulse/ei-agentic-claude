/**
 * Delete user profile photo. This function is only available through a JWT token.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/user/photo
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function delete_photo(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/user/photo", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
