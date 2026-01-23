/**
 * Admin-only API to get global metrics.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/metrics
 */
export async function get_global_metrics(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/admin/metrics`, {
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
