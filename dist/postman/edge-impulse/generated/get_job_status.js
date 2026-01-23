/**
 * Get the status for a job.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/:jobId/status
 */
export async function get_job_status(params, apiKey) {
    const organizationId = params?.organizationId;
    const jobId = params?.jobId;
    if (!organizationId)
        throw new Error('Missing required parameter `organizationId`.');
    if (!jobId)
        throw new Error('Missing required parameter `jobId`.');
    const url = `https://studio.edgeimpulse.com/api/organizations/${encodeURIComponent(String(organizationId))}/jobs/${encodeURIComponent(String(jobId))}/status`;
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        // body: JSON.stringify(params), // Uncomment for POST/PUT
    });
    if (res.ok)
        return res.json();
    const text = await res.text();
    try {
        const err = JSON.parse(text);
        throw new Error(`Edge Impulse API error: ${err.message || JSON.stringify(err)}`);
    }
    catch {
        throw new Error(`Edge Impulse API error: ${res.status} ${res.statusText} - ${text}`);
    }
}
