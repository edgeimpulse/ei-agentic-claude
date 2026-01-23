/**
 * Convert current evaluation user account to regular account.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user/convert
 */
export async function convert_current_evaluation_user(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/user/convert`, {
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
