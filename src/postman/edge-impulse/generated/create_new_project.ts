/**
 * Create a new project. This API can only be called using a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/projects/create
 */
export async function create_new_project(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/projects/create`, {
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
