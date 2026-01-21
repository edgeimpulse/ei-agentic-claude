/**
 * Get the status of a training job for an Edge Impulse project.
 * @param apiKey - Edge Impulse API key
 * @param projectId - Project ID
 * @param jobId - Training job ID
 * @returns Job status and result
 */
export async function getTrainingJobStatus(apiKey, projectId, jobId) {
    const url = `https://studio.edgeimpulse.com/v1/api/${projectId}/jobs/${jobId}`;
    const response = await fetch(url, {
        headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json"
        }
    });
    if (response.ok) {
        return await response.json();
    }
    throw new Error(`Failed to fetch job status: ${response.status}`);
}
