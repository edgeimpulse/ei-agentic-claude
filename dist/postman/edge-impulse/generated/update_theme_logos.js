/**
 * Update some or all theme logos.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/themes/:themeId/logos
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_theme_logos(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/themes/:themeId/logos", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
