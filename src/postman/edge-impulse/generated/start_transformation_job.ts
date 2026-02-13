/**
 * Start a transformation job to fetch data from the organization and put it in a project, or transform into new data.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function start_transformation_job(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
