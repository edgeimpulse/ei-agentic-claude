/**
 * Change the password for a user account. This function is only available through a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/users/:userId/change-password
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function change_password(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/users/:userId/change-password", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
