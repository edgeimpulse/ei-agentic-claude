/**
 * Retrieve the list of all public projects. You don't need any authentication for this method.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/projects/public?limit=<integer>&offset=<integer>&project=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function list_public_projects(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/projects/public?limit=<integer>&offset=<integer>&project=<string>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
