/**
 * Add a note to a project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/notes/add
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function add_note(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/notes/add", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
