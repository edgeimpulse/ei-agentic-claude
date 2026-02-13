/**
 * Get all public versions for this project. You don't need any authentication for this function.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/versions/public
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function list_public_versions(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/versions/public", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
