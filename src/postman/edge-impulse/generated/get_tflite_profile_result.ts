/**
 * Get the results from a job started from startProfileTfliteJob.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/profile-tflite/:jobId/result
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_tflite_profile_result(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/profile-tflite/:jobId/result", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
