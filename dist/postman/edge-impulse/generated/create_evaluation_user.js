/**
 * Creates an evaluation user and a new project, and redirects the user to the new project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api-user-create-evaluate
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function create_evaluation_user(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api-user-create-evaluate", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
