/**
 * Convert current evaluation user account to regular account.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user/convert
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function convert_current_evaluation_user(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/user/convert", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
