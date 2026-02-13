/**
 * Configure the Keras block, such as its minimum confidence score. Use the impulse blocks to find the learnId.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function keras_settings(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
