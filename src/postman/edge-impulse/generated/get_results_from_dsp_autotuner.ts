/**
 * Get a set of parameters, found as a result of running the DSP autotuner.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/get-autotuner-results
 */
export async function get_results_from_dsp_autotuner(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/get-autotuner-results`, {
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
