/**
 * Updates an upload portal for the organization.
 * Method: PUT
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/update
 */
export async function update_upload_portal(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/update`, {
    method: 'PUT',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    // body: JSON.stringify(params), // Uncomment for POST/PUT
  });
  return res.json();
}
