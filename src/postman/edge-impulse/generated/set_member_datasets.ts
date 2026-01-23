/**
 * Set the datasets a guest member has access to in an organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/members/:memberId/datasets
 */
export async function set_member_datasets(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/members/:memberId/datasets`, {
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
