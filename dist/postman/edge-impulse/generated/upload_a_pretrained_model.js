/**
 * Upload a pretrained model and receive info back about the input/output tensors. If you want to deploy a pretrained model from the API, see `startDeployPretrainedModelJob`.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/pretrained-model/upload
 */
export async function upload_a_pretrained_model(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/pretrained-model/upload`, {
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
