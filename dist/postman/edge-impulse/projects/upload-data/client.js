/**
 * Upload data to an Edge Impulse project.
 * @param apiKey - Edge Impulse API key
 * @param req - Upload data request
 * @returns Upload result
 */
export async function uploadData(apiKey, req) {
    const url = `https://studio.edgeimpulse.com/v1/api/${req.projectId}/data`;
    let body;
    if (typeof req.data === 'string') {
        body = req.data;
    }
    else if (req.data instanceof Buffer) {
        body = req.data;
    }
    else {
        throw new Error('Invalid data type for upload: must be string or Buffer');
    }
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "x-api-key": apiKey,
            // Content-Type may need to be set based on data type
        },
        body
    });
    if (response.ok) {
        return (await response.json());
    }
    const error = (await response.json());
    throw new Error(`Edge Impulse API error: ${error.message}`);
}
