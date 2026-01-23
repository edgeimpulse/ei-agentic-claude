/**
 * Returns the latency, RAM and ROM used for the pretrained model - upload first via  `uploadPretrainedModel`. This is using the project's selected latency device. Updates are streamed over the websocket API (or can be retrieved through the /stdout endpoint). Use getProfileTfliteJobResult to get the results when the job is completed.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/pretrained-model/profile
 */
export async function profile_pretrained_model(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/pretrained-model/profile`, {
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
