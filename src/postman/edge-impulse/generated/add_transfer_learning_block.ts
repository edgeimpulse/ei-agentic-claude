/**
 * Adds a transfer learning block.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/transfer-learning
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function add_transfer_learning_block(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/transfer-learning", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
