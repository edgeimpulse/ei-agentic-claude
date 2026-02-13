/**
 * Get the logs for a job.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/:jobId/stdout?limit=<integer>&logLevel=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_logs(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/:jobId/stdout?limit=<integer>&logLevel=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
