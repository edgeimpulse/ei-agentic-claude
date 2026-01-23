/**
 * Replace Keras block files with the contents of a zip. This is an internal API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/files
 */
export async function upload_keras_files(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/files`, {
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
