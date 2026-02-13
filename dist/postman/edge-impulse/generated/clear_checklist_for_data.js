/**
 * Clear all checklist flags for selected data items.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/clear-checklist?dataset=<string>&dataIds=<string>&filter=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function clear_checklist_for_data(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/data/clear-checklist?dataset=<string>&dataIds=<string>&filter=<string>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
