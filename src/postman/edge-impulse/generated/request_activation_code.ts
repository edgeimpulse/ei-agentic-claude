/**
 * Request a new activation code. This function is only available through a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/users/:userId/request-activation
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function request_activation_code(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/users/:userId/request-activation", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
