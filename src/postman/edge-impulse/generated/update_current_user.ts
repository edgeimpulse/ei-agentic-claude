/**
 * Update user properties such as name. This function is only available through a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function update_current_user(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/user", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
