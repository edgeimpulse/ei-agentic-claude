/**
 * Change the password for the current user account. This function is only available through a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user/change-password
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function change_password_current_user(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/user/change-password", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
