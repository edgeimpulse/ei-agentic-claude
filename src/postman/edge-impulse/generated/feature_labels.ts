/**
 * Retrieve the names of the features the DSP block generates
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/features/labels
 */
export async function feature_labels(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/features/labels`, {
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
