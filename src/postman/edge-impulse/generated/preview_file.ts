/**
 * Preview a single file from a data item (same as downloadOrganizationDataFile but w/ content-disposition inline).
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId/files/preview?fileName=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function preview_file(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId/files/preview?fileName=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
