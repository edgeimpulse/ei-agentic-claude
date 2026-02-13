/**
 * Deletes a dsp block.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/dsp/:dspId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function delete_dsp_block(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/dsp/:dspId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
