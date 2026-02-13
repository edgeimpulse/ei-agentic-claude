/**
 * Revoke an API key.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/apikeys/:apiKeyId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function revoke_api_key(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/apikeys/:apiKeyId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
