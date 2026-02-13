/**
 * Create a new organization. This is an internal API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/create
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function create_new_organization(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/create", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
