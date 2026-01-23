/**
 * Creates an evaluation user and a new project, and redirects the user to the new project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api-user-create-evaluate
 */
export async function create_evaluation_user(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api-user-create-evaluate`, {
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
