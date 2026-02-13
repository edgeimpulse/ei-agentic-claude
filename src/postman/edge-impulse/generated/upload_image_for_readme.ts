/**
 * Uploads an image to the user CDN and returns the path.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/readme/upload-image
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function upload_image_for_readme(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/readme/upload-image", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
