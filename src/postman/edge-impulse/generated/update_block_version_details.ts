/**
 * Update the details of a block version
 * Method: PUT
 * URL: https://studio.edgeimpulse.com/api/:projectId/impulse/block-versions/:blockType/:blockId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function update_block_version_details(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/impulse/block-versions/:blockType/:blockId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "PUT", body: JSON.stringify(params ?? {}) });
}
