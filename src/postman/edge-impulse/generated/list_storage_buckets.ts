/**
 * Retrieve all configured storage buckets. This does not list the secret key.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets
 */
export async function list_storage_buckets(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets`, {
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
