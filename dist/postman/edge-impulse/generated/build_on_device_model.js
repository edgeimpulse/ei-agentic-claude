/**
 * Generate code to run the impulse on an embedded device. When this step is complete use `downloadBuild` to download the artefacts.  Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/build-ondevice-model?type=<string>
 */
export async function build_on_device_model(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/build-ondevice-model?type=<string>`, {
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
