/**
 * Admin-only API to update user properties.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/admin/users/:userId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function update_user(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/users/:userId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
