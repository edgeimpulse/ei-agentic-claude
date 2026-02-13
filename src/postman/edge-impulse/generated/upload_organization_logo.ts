/**
 * Uploads and updates the organization logo
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/logo
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function upload_organization_logo(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/logo", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
