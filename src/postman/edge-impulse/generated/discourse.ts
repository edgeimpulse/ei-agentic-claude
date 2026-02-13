/**
 * Log in a user to the forum. This function is only available through a JWT token.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/auth/discourse?sso=<string>&sig=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function discourse(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/auth/discourse?sso=<string>&sig=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
