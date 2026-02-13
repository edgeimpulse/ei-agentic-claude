/**
 * Set configuration parameters for the DSP block. Only values set in the body will be overwritten.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function set_config(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
