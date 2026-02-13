/**
 * Get the current status of a transformation job job.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId?transformLimit=<integer>&transformOffset=<integer>&selection=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_transformation_job_status(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId?transformLimit=<integer>&transformOffset=<integer>&selection=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
