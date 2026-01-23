/**
 * Clear generated features for a DSP block (used in tests).
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/clear
 */
export async function clear_dsp_block(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/clear`, {
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
