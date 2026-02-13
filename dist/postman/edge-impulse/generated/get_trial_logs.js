/**
 * Get the logs for a trial.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/trial/:trialId/stdout?limit=<integer>&logLevel=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_trial_logs(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/optimize/trial/:trialId/stdout?limit=<integer>&logLevel=<string>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
