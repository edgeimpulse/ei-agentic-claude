/**
 * Remove the current project, and all data associated with it. This is irrevocable!
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function remove_project(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
