/**
 * Completely clears the impulse for this project.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/impulse
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function delete_impulse(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/impulse", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
