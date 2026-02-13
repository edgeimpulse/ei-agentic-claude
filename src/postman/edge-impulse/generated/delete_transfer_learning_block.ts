/**
 * Deletes a transfer learning block.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/secrets/:secretId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function delete_transfer_learning_block(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/secrets/:secretId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
