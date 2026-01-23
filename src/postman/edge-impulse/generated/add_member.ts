/**
 * Add a member to an organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/members/add
 */
export async function add_member(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/members/add`, {
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
