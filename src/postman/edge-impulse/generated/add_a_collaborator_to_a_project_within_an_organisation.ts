/**
 * Add a new collaborator to a project owned by an organisation.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/add-project-collaborator
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function add_a_collaborator_to_a_project_within_an_organisation(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/add-project-collaborator", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
