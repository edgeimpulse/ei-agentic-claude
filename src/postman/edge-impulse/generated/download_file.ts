/**
 * Download a single file from a data item.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId/files/download?fileName=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function download_file(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId/files/download?fileName=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
