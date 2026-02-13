/**
 * Download an exported Keras block - needs to be exported via 'exportKerasBlock' first
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/download-export
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function download_keras_export(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/download-export", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
