/**
 * Upload a photo for a user. This function is only available through a JWT token, and is not available for all users.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/users/:userId/photo
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function upload_photo(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/users/:userId/photo", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
