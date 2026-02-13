/**
 * Score trial
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/score-trial
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function score_trial(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/optimize/score-trial", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
