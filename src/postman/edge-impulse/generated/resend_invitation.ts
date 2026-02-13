/**
 * Resend an invitation to a member in an organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/members/:memberId/resend-invite
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function resend_invitation(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/members/:memberId/resend-invite", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
