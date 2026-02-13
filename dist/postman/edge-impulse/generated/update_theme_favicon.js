/**
 * Update the theme favicon
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/themes/:themeId/favicon
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_theme_favicon(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/themes/:themeId/favicon", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
