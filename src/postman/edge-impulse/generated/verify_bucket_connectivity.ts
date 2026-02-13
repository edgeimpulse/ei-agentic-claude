/**
 * Verify whether we can reach a bucket before adding it.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets/verify
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function verify_bucket_connectivity(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets/verify", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
