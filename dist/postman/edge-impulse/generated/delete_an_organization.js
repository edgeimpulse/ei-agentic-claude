/**
 * Admin-only API to delete an organization. If `fullDeletion` is set, it deletes the organization's identifiable information and files. Otherwise, it soft deletes the organization by setting its `delete_date` value.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/admin/organizations/:organizationId?fullDeletion=<boolean>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function delete_an_organization(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/organizations/:organizationId?fullDeletion=<boolean>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "DELETE" });
}
