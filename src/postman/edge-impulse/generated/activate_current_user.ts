/**
 * Activate the current user account (requires an activation code). This function is only available through a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user/activate
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function activate_current_user(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/user/activate", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
