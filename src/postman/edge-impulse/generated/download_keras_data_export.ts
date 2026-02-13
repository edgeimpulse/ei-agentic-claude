/**
 * Download the data of an exported Keras block - needs to be exported via 'exportKerasBlockData' first
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/download-data
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function download_keras_data_export(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/download-data", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
