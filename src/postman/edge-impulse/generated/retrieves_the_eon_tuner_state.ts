/**
 * Retrieves the EON tuner state
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/state
 */
export async function retrieves_the_eon_tuner_state(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/optimize/state`, {
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
