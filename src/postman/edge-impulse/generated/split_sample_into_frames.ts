/**
 * Split a video sample into individual frames.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/split
 */
export async function split_sample_into_frames(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/split`, {
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
