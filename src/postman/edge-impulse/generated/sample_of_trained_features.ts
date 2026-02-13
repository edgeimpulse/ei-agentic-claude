/**
 * Get a sample of trained features, this extracts a number of samples and their labels. Used to visualize the current training set.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/features/get-graph/:category?featureAx1=<integer>&featureAx2=<integer>&featureAx3=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function sample_of_trained_features(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/features/get-graph/:category?featureAx1=<integer>&featureAx2=<integer>&featureAx3=<integer>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
