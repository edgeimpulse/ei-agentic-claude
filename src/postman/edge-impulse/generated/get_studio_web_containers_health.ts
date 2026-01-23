/**
 * Get studio web containers health.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api-health?requester=<string>
 */
export async function get_studio_web_containers_health(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api-health?requester=<string>`, {
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
