/**
 * Clear generated features for a DSP block (used in tests).
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/clear
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function clear_dsp_block(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/clear", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
