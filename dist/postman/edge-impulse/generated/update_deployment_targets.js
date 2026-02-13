/**
 * Update some or all of the deployment targets enabled for this white label.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier/deploymentTargets
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_deployment_targets(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier/deploymentTargets", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
