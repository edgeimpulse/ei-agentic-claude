/**
 * Adds a transformation block.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/transformation
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function add_transformation_block(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/transformation", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
