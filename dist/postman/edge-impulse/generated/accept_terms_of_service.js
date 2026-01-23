/**
 * Accept Terms of Service.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user/accept-tos
 */
export async function accept_terms_of_service(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/user/accept-tos`, {
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
