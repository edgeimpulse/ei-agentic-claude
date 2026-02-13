/**
 * Create a new project. This API can only be called using a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/projects/create
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function create_new_project(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/projects/create", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
