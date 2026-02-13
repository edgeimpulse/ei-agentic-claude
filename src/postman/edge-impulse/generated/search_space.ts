/**
 * Search space
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/space
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function search_space(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/optimize/space", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
