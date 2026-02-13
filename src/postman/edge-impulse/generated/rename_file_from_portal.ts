/**
 * Rename a file on an upload portal (requires JWT auth).
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/portals/:portalId/files/rename
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function rename_file_from_portal(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/portals/:portalId/files/rename", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
