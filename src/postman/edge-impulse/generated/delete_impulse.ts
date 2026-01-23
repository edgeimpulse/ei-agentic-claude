/**
 * Completely clears the impulse for this project.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/impulse
 */
export async function delete_impulse(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/impulse`, {
    method: 'DELETE',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    // body: JSON.stringify(params), // Uncomment for POST/PUT
  });
  return res.json();
}
