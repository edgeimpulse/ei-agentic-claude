/**
 * Get the last modification date for a project (will be upped when data is modified, or when an impulse is trained)
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/last-modification
 */
export async function last_modification(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/last-modification`, {
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
