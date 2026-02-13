/**
 * View a file that's located in an upload portal (requires JWT auth). Will return a signed URL to the bucket.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/portals/:portalId/files/view?path=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function view_file_from_portal(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/portals/:portalId/files/view?path=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
