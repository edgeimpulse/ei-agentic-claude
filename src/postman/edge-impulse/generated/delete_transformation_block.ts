/**
 * Deletes a transformation block.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/transformation/:transformationId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function delete_transformation_block(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/transformation/:transformationId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
