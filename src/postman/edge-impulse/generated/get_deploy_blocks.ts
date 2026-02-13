/**
 * Retrieve all deploy blocks.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_deploy_blocks(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
