/**
 * Get all jobs for this organization
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/all?startDate=<dateTime>&endDate=<dateTime>&limit=<integer>&offset=<integer>&excludePipelineTransformJobs=<boolean>&rootOnly=<boolean>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function list_all_jobs(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/all?startDate=<dateTime>&endDate=<dateTime>&limit=<integer>&offset=<integer>&excludePipelineTransformJobs=<boolean>&rootOnly=<boolean>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
