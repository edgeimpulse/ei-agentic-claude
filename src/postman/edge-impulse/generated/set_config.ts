/**
 * Set configuration parameters for the DSP block. Only values set in the body will be overwritten.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId
 */
export async function set_config(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId`, {
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
