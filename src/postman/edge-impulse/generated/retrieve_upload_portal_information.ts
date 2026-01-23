/**
 * Retrieve a single upload portals identified by ID.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId
 */
export async function retrieve_upload_portal_information(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId`, {
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
