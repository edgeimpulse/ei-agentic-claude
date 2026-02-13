/**
 * Get a JWT token to authenticate with the API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api-login
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_jwt_token(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api-login", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
