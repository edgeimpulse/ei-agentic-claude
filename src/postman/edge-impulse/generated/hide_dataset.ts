/**
 * Hide a dataset (does not remove underlying data)
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/dataset/:dataset/hide
 */
export async function hide_dataset(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/dataset/:dataset/hide`, {
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
