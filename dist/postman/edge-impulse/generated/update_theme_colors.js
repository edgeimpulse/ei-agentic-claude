/**
 * Update some or all theme colors.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/themes/:themeId/colors
 */
export async function update_theme_colors(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/themes/:themeId/colors`, {
        method: 'POST',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        // body: JSON.stringify(params), // Uncomment for POST/PUT
    });
    return res.json();
}
