/**
 * Download the build artefacts for a project
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/deployment/download?type=<string>&modelType=<string>&engine=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function download(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/deployment/download?type=<string>&modelType=<string>&engine=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
