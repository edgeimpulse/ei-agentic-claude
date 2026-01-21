/**
 * Admin-only API to list all information about this organization.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/organizations/:organizationId
 */
export async function organization_information(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/admin/organizations/:organizationId`, {
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
