/**
 * Upload a zip files with a wav file and its Label metadata to run performance calibration on it.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/files
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function upload_performance_calibration_audio_files(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/performance-calibration/files", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
