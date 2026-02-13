/**
 * Retrieve list of active projects. If authenticating using JWT token this lists all the projects the user has access to, if authenticating using an API key, this only lists that project.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/projects
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function list_active_projects(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/projects", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
