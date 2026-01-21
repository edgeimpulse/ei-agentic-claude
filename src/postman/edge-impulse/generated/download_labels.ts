/**
 * Download the labels for this learning block. This is data already processed by the signal processing blocks. Not all blocks support this function. If so, a GenericApiResponse is returned with an error message.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/:learnId/y
 */
export async function download_labels(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/training/:learnId/y`, {
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
