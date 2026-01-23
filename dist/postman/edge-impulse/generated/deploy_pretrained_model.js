/**
 * Takes in a TFLite file and builds the model and SDK. Updates are streamed over the websocket API (or can be retrieved through the /stdout endpoint). Use getProfileTfliteJobResult to get the results when the job is completed.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/deploy-pretrained-model
 */
export async function deploy_pretrained_model(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/deploy-pretrained-model`, {
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
