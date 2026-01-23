/**
 * Retrieve the metadata from a generated DSP block.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/metadata
 */
export async function get_metadata(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/metadata`, {
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
