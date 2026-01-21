/**
 * Get performance calibration ground truth data
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/ground-truth
 */
export async function get_ground_truth(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/performance-calibration/ground-truth`, {
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
