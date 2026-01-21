/**
 * Retrieve list of active projects. If authenticating using JWT token this lists all the projects the user has access to, if authenticating using an API key, this only lists that project.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/projects
 */
export async function list_active_projects(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/projects`, {
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
