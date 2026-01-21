/**
 * Bulk adds data items that already exist in a storage bucket. The bucket path specified should contain folders. Each folder is added as a data item in Edge Impulse.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/add-folder
 */
export async function add_data_items_from_bucket(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/data/add-folder`, {
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
