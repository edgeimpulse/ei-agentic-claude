/**
 * Make a version of a project public. This makes all data and state available (read-only) on a public URL, and allows users to clone this project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/versions/:versionId/make-public
 */
export async function make_a_version_public(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/versions/:versionId/make-public`, {
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
