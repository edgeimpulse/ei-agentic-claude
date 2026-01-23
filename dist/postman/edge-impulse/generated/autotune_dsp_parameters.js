/**
 * Autotune DSP block parameters. Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/autotune-dsp
 */
export async function autotune_dsp_parameters(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/autotune-dsp`, {
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
