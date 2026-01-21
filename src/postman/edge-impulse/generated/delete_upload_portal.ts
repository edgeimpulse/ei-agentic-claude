/**
 * Deletes an upload portal for the organization.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/delete
 */
export async function delete_upload_portal(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/delete`, {
    method: 'DELETE',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    // body: JSON.stringify(params), // Uncomment for POST/PUT
  });
  return res.json();
}
