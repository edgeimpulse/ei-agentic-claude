/**
 * Creates a signed link to securely upload data to s3 bucket directly from the client.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/portals/:portalId/upload-link
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function create_pre_signed_s3_upload_link(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/portals/:portalId/upload-link", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
