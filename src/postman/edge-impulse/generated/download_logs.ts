/**
 * Download the logs for a job (as a text file).
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/:jobId/stdout/download?limit=<integer>&logLevel=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function download_logs(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/:jobId/stdout/download?limit=<integer>&logLevel=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
