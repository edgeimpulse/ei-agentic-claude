/**
 * Get a list of all emails sent by Edge Impulse regarding this project.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/emails
 */
export async function list_emails(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/emails`, {
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
