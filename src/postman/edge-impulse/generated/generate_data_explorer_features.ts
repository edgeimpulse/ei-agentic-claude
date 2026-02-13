/**
 * Generate features for the data explorer
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/data-explorer-features
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function generate_data_explorer_features(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/data-explorer-features", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
