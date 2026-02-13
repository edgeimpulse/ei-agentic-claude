/**
 * Admin-only API to delete a user. If `fullDeletion` is set, it deletes the user's identifiable information and files. Otherwise, it soft deletes the user by setting it's `delete_date` value.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/admin/users/:userId?fullDeletion=<boolean>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function delete_a_user(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/users/:userId?fullDeletion=<boolean>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "DELETE" });
}
