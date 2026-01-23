/**
 * Create a new version of the project. This stores all data and configuration offsite. If you have access to the enterprise version of Edge Impulse you can store your data in your own storage buckets (only through JWT token authentication).
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/version
 */
export async function version_project(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/version`, {
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
