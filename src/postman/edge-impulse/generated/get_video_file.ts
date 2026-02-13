/**
 * Get a sample as an video file. This only applies to samples with video data.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/video?afterInputBlock=<boolean>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_video_file(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/video?afterInputBlock=<boolean>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
