/**
 * Get trained features for a single sample. This runs both the DSP prerequisites and the anomaly classifier.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId/features/get-graph/classification/:sampleId
 */
export async function trained_features_for_sample(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId/features/get-graph/classification/:sampleId`, {
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
