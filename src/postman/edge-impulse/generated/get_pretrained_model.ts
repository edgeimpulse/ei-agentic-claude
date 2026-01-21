/**
 * Receive info back about the earlier uploaded pretrained model (via `uploadPretrainedModel`) input/output tensors. If you want to deploy a pretrained model from the API, see `startDeployPretrainedModelJob`.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/pretrained-model
 */
export async function get_pretrained_model(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/pretrained-model`, {
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
