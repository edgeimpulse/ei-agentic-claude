/**
 * Admin-only API to get the list of all projects.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/projects?name=&active=&sort=&limit=&offset=
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_all_projects(params: any, apiKey: string) {
  const url = buildEiUrl(
    "https://studio.edgeimpulse.com/api/admin/projects?name=&active=&sort=&limit=&offset=",
    params ?? {}
  );

  return eiFetchJson(url, apiKey, { method: "GET" });
}
