/**
 * Retrieve all archived organizational pipelines
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/archived
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function list_archived_pipelines(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/archived", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
