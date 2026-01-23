/**
 * Revoke an HMAC key. Note that if you revoke the development key some services (such as automatic provisioning of devices through the serial daemon) will no longer work.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/hmackeys/:hmacId
 */
export async function remove_hmac_key(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/hmackeys/:hmacId`, {
        method: 'DELETE',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        // body: JSON.stringify(params), // Uncomment for POST/PUT
    });
    return res.json();
}
