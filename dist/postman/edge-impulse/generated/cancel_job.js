/**
 * Cancel a running job.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/:jobId/cancel?forceCancel=<string>
 */
export async function cancel_job(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/:jobId/cancel?forceCancel=<string>`, {
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
