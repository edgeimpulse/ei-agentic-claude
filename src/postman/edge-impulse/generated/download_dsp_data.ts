/**
 * Download output from a DSP block over all data in the training set, already sliced in windows. In Numpy binary format.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp-data/:dspId/x/:category?raw=<boolean>
 */
export async function download_dsp_data(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/dsp-data/:dspId/x/:category?raw=<boolean>`, {
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
