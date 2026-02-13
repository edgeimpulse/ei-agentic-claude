/**
 * List all files and directories in specified prefix.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/portals/:portalId/files
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function list_files_in_portal(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/portals/:portalId/files", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
