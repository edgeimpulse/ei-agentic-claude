/**
 * Verify the validity of a custom DSP block
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/verify-dsp-block/url
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function verify_custom_dsp_block(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/verify-dsp-block/url", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
