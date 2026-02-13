/**
 * Get a sample as an image file. This only applies to samples with RGBA data.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/image?afterInputBlock=<boolean>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_image_file(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/image?afterInputBlock=<boolean>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
