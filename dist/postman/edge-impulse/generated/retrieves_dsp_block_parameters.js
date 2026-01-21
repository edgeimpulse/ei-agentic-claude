/**
 * Retrieves DSP block parameters
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/dsp-parameters?organizationId=<integer>&organizationDspId=<integer>
 */
export async function retrieves_dsp_block_parameters(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/optimize/dsp-parameters?organizationId=<integer>&organizationDspId=<integer>`, {
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
