/**
 * Remove a member from an organization. Note that you cannot invoke this function if only a single member is present to the organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/members/remove
 */
export async function remove_member(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/members/remove`, {
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
