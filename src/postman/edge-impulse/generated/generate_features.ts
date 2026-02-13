/**
 * Take the raw training set and generate features from them. Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/generate-features
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function generate_features(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/generate-features", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
