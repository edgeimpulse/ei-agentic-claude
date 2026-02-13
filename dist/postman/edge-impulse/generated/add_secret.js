/**
 * Adds a secret.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/secrets
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function add_secret(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/secrets", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
