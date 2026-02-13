/**
 * Update the list of project tags.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/tags
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function update_tags(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/tags", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
