/**
 * Get a data item. This will HEAD the underlying bucket to retrieve the last file information.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId?filter=<string>
 */
export async function get_data_metadata(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId?filter=<string>`, {
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
