/**
 * Remove the current organization, and all data associated with it. This is irrevocable!
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function remove_organization(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
