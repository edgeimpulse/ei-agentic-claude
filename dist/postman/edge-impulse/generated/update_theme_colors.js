/**
 * Update some or all theme colors.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/themes/:themeId/colors
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_theme_colors(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/themes/:themeId/colors", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
