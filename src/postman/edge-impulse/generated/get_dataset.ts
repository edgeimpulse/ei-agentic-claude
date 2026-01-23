/**
 * Get information about a dataset
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/dataset/:dataset
 */
export async function get_dataset(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/dataset/:dataset`, {
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
