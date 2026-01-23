/**
 * Generate features for the data explorer
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/data-explorer-features
 */
export async function generate_data_explorer_features(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/data-explorer-features`, {
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
