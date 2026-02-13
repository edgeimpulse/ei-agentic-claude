/**
 * Get the current posterior parameters for the Syntiant deployment target
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/deployment/syntiant/posterior
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_syntiant_posterior_parameters(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/deployment/syntiant/posterior", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
