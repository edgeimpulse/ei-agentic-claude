/**
 * Get a sample of trained features, this extracts a number of samples and their labels. Used to visualize the current training set.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/features/get-graph/:category?featureAx1=<integer>&featureAx2=<integer>&featureAx3=<integer>
 */
export async function sample_of_trained_features(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/features/get-graph/:category?featureAx1=<integer>&featureAx2=<integer>&featureAx3=<integer>`, {
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
