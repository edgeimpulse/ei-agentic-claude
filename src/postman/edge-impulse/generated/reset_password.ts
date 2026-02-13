/**
 * Reset the password for a user.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api-user-reset-password
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function reset_password(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api-user-reset-password", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
