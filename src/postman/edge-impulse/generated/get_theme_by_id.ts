/**
 * Get a theme given its unique identifier.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/themes/:themeId
 */
export async function get_theme_by_id(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/themes/:themeId`, {
    method: 'GET',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    // body: JSON.stringify(params), // Uncomment for POST/PUT
  });
  return res.json();
}
