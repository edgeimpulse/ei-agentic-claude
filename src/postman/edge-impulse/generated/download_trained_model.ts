/**
 * Download a trained model for a learning block. Depending on the block this can be a TensorFlow model, or the cluster centroids.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/learn-data/:learnId/model/:modelDownloadId
 */
export async function download_trained_model(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/learn-data/:learnId/model/:modelDownloadId`, {
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
