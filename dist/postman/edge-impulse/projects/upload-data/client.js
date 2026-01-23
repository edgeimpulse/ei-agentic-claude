/**
 * Upload data to an Edge Impulse project.
 * @param apiKey - Edge Impulse API key
 * @param req - Upload data request
 * @returns Upload result
 */
export async function uploadData(apiKey, req) {
    const url = `https://studio.edgeimpulse.com/v1/api/${req.projectId}/data`;
    let body;
    const headers = {
        "x-api-key": apiKey,
    };
    const suppliedContentType = req.contentType;
    if (typeof req.data === 'string') {
        body = req.data;
        // If the caller didn't provide a contentType, assume text/plain
        headers['Content-Type'] = suppliedContentType || 'text/plain';
    }
    else if (req.data instanceof Buffer) {
        // Node Buffer is acceptable for BodyInit at runtime; set a sensible default
        body = req.data;
        headers['Content-Type'] = suppliedContentType || 'application/octet-stream';
    }
    else {
        throw new Error('Invalid data type for upload: must be string or Buffer');
    }
    const response = await fetch(url, {
        method: "POST",
        headers,
        body
    });
    if (response.ok) {
        return (await response.json());
    }
    // Provide rich error output for easier debugging (like other clients)
    const errorText = await response.text();
    try {
        const error = JSON.parse(errorText);
        throw new Error(`Edge Impulse API error: ${error.message}`);
    }
    catch {
        throw new Error(`Edge Impulse API error: ${response.status} ${response.statusText} - ${errorText}`);
    }
}
