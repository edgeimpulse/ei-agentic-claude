/**
 * Upload data to an Edge Impulse project.
 * @param apiKey - Edge Impulse API key
 * @param req - Upload data request
 * @returns Upload result
 */
export async function uploadData(apiKey, req) {
    const url = `https://studio.edgeimpulse.com/v1/api/${req.projectId}/data`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "x-api-key": apiKey,
            // Content-Type may need to be set based on data type
        },
        body: req.data
    });
    if (response.ok) {
        return (await response.json());
    }
    const error = (await response.json());
    throw new Error(`Edge Impulse API error: ${error.message}`);
}
