/**
 * Set the datasets a guest member has access to in an organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/members/:memberId/datasets
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function set_member_datasets(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/members/:memberId/datasets", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
