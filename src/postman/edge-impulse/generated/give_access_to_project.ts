/**
 * Authorize a third party to access a project
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/third-party-auth/:authId/authorize
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function give_access_to_project(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/third-party-auth/:authId/authorize", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
