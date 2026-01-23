/**
 * Verify whether we can reach a bucket before adding it.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets/verify
 */
export async function verify_bucket_connectivity(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets/verify`, {
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
