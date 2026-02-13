/**
 * Uploads and updates the organization header image
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/header
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function upload_organization_header_image(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/header", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
