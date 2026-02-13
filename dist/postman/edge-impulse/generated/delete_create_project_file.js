/**
 * Remove a file from a create project job. Only files for which no jobs are running can be deleted.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/files/:createProjectFileId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function delete_create_project_file(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/files/:createProjectFileId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "DELETE" });
}
