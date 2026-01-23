/**
 * t-SNE2 output of the raw dataset using embeddings from this Keras block
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/data-explorer/features
 */
export async function get_data_explorer_features(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/data-explorer/features`, {
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
