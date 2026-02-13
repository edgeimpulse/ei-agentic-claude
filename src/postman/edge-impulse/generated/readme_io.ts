/**
 * Log in a user to the docs. This function is only available through a JWT token.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/auth/readme
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function readme_io(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/auth/readme", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
