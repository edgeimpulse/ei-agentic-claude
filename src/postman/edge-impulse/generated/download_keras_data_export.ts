/**
 * Download the data of an exported Keras block - needs to be exported via 'exportKerasBlockData' first
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/download-data
 */
export async function download_keras_data_export(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/download-data`, {
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
