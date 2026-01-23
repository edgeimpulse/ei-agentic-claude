/**
 * Get slice of raw sample data, but with only the axes selected by the DSP block. E.g. if you have selected only accX and accY as inputs for the DSP block, but the raw sample also contains accZ, accZ is filtered out.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/raw-data/:sampleId/slice?sliceStart=<integer>&sliceEnd=<integer>
 */
export async function get_raw_sample_slice(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/raw-data/:sampleId/slice?sliceStart=<integer>&sliceEnd=<integer>`, {
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
