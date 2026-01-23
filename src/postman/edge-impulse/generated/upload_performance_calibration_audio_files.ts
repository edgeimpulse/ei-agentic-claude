/**
 * Upload a zip files with a wav file and its Label metadata to run performance calibration on it.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/files
 */
export async function upload_performance_calibration_audio_files(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/performance-calibration/files`, {
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
