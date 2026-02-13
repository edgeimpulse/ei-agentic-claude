/**
 * t-SNE2 output of the raw dataset using embeddings from this Keras block
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/data-explorer/features
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_data_explorer_features(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/data-explorer/features", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
