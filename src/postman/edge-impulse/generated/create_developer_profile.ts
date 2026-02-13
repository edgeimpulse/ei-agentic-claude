/**
 * Create a developer profile for the current active user.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user/create-developer-profile
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function create_developer_profile(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/user/create-developer-profile", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
