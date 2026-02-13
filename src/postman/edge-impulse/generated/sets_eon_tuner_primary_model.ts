/**
 * Sets EON tuner primary model
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/set-tuner-primary-job?trialId=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function sets_eon_tuner_primary_model(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/set-tuner-primary-job?trialId=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
