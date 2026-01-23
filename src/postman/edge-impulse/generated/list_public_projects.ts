/**
 * Retrieve the list of all public projects. You don't need any authentication for this method.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/projects/public?limit=<integer>&offset=<integer>&project=<string>
 */
export async function list_public_projects(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/projects/public?limit=<integer>&offset=<integer>&project=<string>`, {
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
