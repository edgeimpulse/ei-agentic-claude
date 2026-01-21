/**
 * Get the interval of the training data; if multiple intervals are present, the interval of the longest data item is returned.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/data-interval
 */
export async function get_the_interval_in_ms_of_the_training_data(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/data-interval`, {
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
