/**
 * Deletes all samples for this project over all categories. This also invalidates all DSP and learn blocks. Note that this does not delete the data from cold storage.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/delete-all
 */
export async function remove_all_samples(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/delete-all`, {
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
