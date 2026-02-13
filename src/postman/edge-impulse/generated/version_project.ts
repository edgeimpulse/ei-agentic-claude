/**
 * Create a new version of the project. This stores all data and configuration offsite. If you have access to the enterprise version of Edge Impulse you can store your data in your own storage buckets (only through JWT token authentication).
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/version
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function version_project(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/version", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
