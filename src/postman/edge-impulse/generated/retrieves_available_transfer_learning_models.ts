/**
 * Retrieves available transfer learning models
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/transfer-learning-models
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function retrieves_available_transfer_learning_models(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/optimize/transfer-learning-models", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
