/**
 * Remove a transformation job. This will stop all running jobs.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function delete_transformation_job(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
