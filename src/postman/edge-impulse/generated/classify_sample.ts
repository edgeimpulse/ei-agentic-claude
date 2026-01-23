/**
 * Classify a complete file against the current impulse. This will move the sliding window (dependent on the sliding window length and the sliding window increase parameters in the impulse) over the complete file, and classify for every window that is extracted.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/classify/:sampleId
 */
export async function classify_sample(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/classify/:sampleId`, {
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
