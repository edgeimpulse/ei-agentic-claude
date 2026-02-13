/**
 * Retrieve the development API and HMAC keys for a project. These keys are specifically marked to be used during development. These keys can be `undefined` if no development keys are set.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/devkeys
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_development_keys(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/devkeys", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
