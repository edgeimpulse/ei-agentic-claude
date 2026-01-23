/**
 * Download the logs for a job (as a text file).
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/:jobId/stdout/download?limit=<integer>&logLevel=<string>
 */
export async function download_logs(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/:jobId/stdout/download?limit=<integer>&logLevel=<string>`, {
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
