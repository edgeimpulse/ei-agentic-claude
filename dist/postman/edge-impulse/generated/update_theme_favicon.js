/**
 * Update the theme favicon
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/themes/:themeId/favicon
 */
export async function update_theme_favicon(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/themes/:themeId/favicon`, {
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
