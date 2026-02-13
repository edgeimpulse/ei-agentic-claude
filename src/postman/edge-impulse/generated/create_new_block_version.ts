/**
 * Create a new version of a given block
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/impulse/block-versions/:blockType/:blockId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function create_new_block_version(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/impulse/block-versions/:blockType/:blockId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
