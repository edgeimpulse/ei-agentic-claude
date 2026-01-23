/**
 * Get window settings
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/window-settings
 */
export async function get_window_settings(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/optimize/window-settings`, {
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
