/**
 * Get the results from a job started from startProfileTfliteJob.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/profile-tflite/:jobId/result
 */
export async function get_tflite_profile_result(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/profile-tflite/:jobId/result`, {
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
