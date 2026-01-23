/**
 * Get metadata for all samples in a project.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/metadata?category=<string>
 */
export async function get_project_sample_metadata(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/metadata?category=<string>`, {
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
