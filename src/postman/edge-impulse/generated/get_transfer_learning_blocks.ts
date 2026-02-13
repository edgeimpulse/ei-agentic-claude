/**
 * Retrieve all transfer learning blocks.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/transfer-learning
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_transfer_learning_blocks(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/transfer-learning", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
