/**
 * Remove a storage bucket. This will render any data in this storage bucket unreachable.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets/:bucketId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function remove_storage_bucket(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets/:bucketId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
