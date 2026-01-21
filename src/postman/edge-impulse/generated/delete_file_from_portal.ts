/**
 * Delete a file from an upload portal (requires JWT auth).
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/portals/:portalId/files/delete
 */
export async function delete_file_from_portal(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/portals/:portalId/files/delete`, {
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
