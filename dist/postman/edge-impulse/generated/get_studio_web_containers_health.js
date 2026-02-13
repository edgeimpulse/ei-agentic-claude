/**
 * Get studio web containers health.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api-health?requester=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_studio_web_containers_health(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api-health?requester=<string>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
