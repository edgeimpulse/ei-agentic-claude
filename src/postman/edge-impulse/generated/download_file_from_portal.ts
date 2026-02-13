/**
 * Download a file from an upload portal (requires JWT auth). Will return a signed URL to the bucket.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/portals/:portalId/files/download
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function download_file_from_portal(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/portals/:portalId/files/download", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
