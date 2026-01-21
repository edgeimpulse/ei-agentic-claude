/**
 * Rotates the token for an upload portal.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/rotate-token
 */
export async function rotate_upload_portal_token(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/rotate-token`, {
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
