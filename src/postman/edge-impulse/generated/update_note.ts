/**
 * Update a note from a project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/notes/:noteId/update
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function update_note(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/notes/:noteId/update", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
