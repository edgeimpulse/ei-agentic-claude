/**
 * Update all data items. HEADs all underlying buckets to retrieve the last file information. Use this API after uploading data directly to S3.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/refresh?dataset=<string>
 */
export async function refresh_data(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/data/refresh?dataset=<string>`, {
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
