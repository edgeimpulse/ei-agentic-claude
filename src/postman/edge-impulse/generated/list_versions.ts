/**
 * Get all versions for this project.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/versions
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function list_versions(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/versions", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
