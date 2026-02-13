/**
 * Delete a single file from a data item.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId/download?fileName=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function delete_file(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId/download?fileName=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
