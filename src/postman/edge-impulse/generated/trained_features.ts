/**
 * Get a sample of trained features, this extracts a number of samples and their features.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId/features/get-graph?featureAx1=<integer>&featureAx2=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function trained_features(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId/features/get-graph?featureAx1=<integer>&featureAx2=<integer>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
