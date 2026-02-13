/**
 * Retrieve all dsp blocks.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/dsp
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_dsp_blocks(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/dsp", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
