/**
 * Retrieve list of organizations that a user is a part of. If authenticating using JWT token this lists all the organizations the user has access to, if authenticating using an API key, this only lists that organization.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations
 */
export async function list_active_organizations(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations`, {
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
