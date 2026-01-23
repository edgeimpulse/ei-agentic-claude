/**
 * Evaluates every variant of the current impulse. Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/evaluate
 */
export async function evaluate(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/evaluate`, {
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
