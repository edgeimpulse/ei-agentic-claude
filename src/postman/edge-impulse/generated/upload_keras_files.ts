/**
 * Replace Keras block files with the contents of a zip. This is an internal API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/files
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function upload_keras_files(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/files", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
