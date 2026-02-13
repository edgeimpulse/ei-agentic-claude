/**
 * Create a new user and project
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api-user-create
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function create_user(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api-user-create", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
