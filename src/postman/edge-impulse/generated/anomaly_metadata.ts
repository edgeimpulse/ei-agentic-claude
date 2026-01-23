/**
 * Get metadata about a trained anomaly block. Use the impulse blocks to find the learnId.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId/metadata
 */
export async function anomaly_metadata(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId/metadata`, {
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
