/**
 * Get all notes in project.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/notes
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_notes(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/notes", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
