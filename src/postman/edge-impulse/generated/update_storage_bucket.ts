/**
 * Updates storage bucket details. This only updates fields that were set in the request body.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets/:bucketId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function update_storage_bucket(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets/:bucketId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
