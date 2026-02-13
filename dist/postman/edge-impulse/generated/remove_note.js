/**
 * Remove a note from a project.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/notes/:noteId/remove
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function remove_note(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/notes/:noteId/remove", params ?? {});
    return eiFetchJson(url, apiKey, { method: "DELETE" });
}
