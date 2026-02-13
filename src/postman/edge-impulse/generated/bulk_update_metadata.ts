/**
 * Bulk update the metadata of many data items in one go. This requires you to submit a CSV file with headers, one of which the columns should be named 'name'. The other columns are used as metadata keys.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/bulk-metadata
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function bulk_update_metadata(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/data/bulk-metadata", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
