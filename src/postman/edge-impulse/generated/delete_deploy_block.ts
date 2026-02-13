/**
 * Deletes a deploy block.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy/:deployId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function delete_deploy_block(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy/:deployId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
