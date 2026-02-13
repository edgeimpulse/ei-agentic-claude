/**
 * Updates a transformation block. Only values in the body will be updated.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/transformation/:transformationId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function update_transformation_block(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/transformation/:transformationId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
