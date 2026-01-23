/**
 * Verify the validity of a custom DSP block
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/verify-dsp-block/url
 */
export async function verify_custom_dsp_block(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/verify-dsp-block/url`, {
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
