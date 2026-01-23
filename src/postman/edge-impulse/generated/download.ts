/**
 * Download the build artefacts for a project
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/deployment/download?type=<string>&modelType=<string>&engine=<string>
 */
export async function download(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/deployment/download?type=<string>&modelType=<string>&engine=<string>`, {
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
