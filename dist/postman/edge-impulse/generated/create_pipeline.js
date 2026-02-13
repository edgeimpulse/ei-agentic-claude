/**
 * Create an organizational pipelines
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function create_pipeline(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
