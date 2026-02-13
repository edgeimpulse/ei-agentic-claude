/**
 * Set data explorer configuration, like the type of data, and the input / dsp block to use.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/settings
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function set_data_explorer_settings(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/settings", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
