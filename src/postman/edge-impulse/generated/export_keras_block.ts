/**
 * Export the training pipeline of a Keras block. Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/train/keras/:learnId/export
 */
export async function export_keras_block(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/train/keras/:learnId/export`, {
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
