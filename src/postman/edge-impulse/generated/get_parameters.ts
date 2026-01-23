/**
 * Get performance calibration stored parameters
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/parameters
 */
export async function get_parameters(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/performance-calibration/parameters`, {
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
