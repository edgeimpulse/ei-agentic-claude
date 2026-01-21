/**
 * Remove the current project, and all data associated with it. This is irrevocable!
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId
 */
export async function remove_project(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId`, {
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
