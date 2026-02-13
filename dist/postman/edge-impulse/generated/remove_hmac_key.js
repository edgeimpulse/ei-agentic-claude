/**
 * Revoke an HMAC key. Note that if you revoke the development key some services (such as automatic provisioning of devices through the serial daemon) will no longer work.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/hmackeys/:hmacId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function remove_hmac_key(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/hmackeys/:hmacId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "DELETE" });
}
