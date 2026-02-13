/**
 * This clears out *all data in your project*, and is irrevocable. This function is only available through a JWT token, and is not available to all users.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/launch-getting-started
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function launch_getting_started_wizard(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/launch-getting-started", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
