/**
 * Updates a dsp block. Only values in the body will be updated.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/dsp/:dspId
 */
export async function update_dsp_block(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/dsp/:dspId`, {
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
