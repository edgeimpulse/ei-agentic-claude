/**
 * Get the synthetic sample as a WAV file
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/wav
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_wav_file(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/performance-calibration/wav", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
