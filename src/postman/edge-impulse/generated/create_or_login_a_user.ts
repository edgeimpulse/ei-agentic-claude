/**
 * Login as a user as a third-party authentication provider. If the user does not exists, it's automatically created. You can only log in as users that were previously created by you.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/third-party-auth/:authId/login
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function create_or_login_a_user(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/third-party-auth/:authId/login", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
