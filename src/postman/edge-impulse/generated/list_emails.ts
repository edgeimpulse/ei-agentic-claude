/**
 * Get a list of all emails sent by Edge Impulse regarding this project.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/emails
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function list_emails(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/emails", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
