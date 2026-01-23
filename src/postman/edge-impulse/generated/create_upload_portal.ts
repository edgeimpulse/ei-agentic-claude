/**
 * Creates a new upload portal for the organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/create
 */
export async function create_upload_portal(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/create`, {
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
