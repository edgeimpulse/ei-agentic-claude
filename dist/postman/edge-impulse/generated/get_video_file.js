/**
 * Get a sample as an video file. This only applies to samples with video data.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/v1/api/:projectId/raw-data/:sampleId/video
 */
export async function get_video_file(params, apiKey) {
    const pathParams = ["projectId", "sampleId"];
    const queryParams = ["afterInputBlock"];
    let url = `https://studio.edgeimpulse.com/v1/api/:projectId/raw-data/:sampleId/video`;
    for (const key of pathParams) {
        const value = params?.[key];
        if (value === undefined || value === null) {
            throw new Error(`Missing required path param: ${key}`);
        }
        url = url.replace(`:${key}`, encodeURIComponent(String(value)));
    }
    const urlObj = new URL(url);
    for (const key of queryParams) {
        const value = params?.[key];
        if (value !== undefined && value !== null) {
            urlObj.searchParams.set(key, String(value));
        }
    }
    const bodyParams = { ...(params || {}) };
    for (const key of pathParams)
        delete bodyParams[key];
    for (const key of queryParams)
        delete bodyParams[key];
    const hasBody = !['GET', 'HEAD'].includes('GET') && Object.keys(bodyParams).length > 0;
    const res = await fetch(urlObj.toString(), {
        method: 'GET',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        ...(hasBody ? { body: JSON.stringify(bodyParams) } : {}),
    });
    const contentType = res.headers.get('content-type') || '';
    const text = await res.text();
    let data = null;
    if (contentType.includes('application/json')) {
        try {
            data = JSON.parse(text);
        }
        catch {
            data = null;
        }
    }
    if (!res.ok) {
        const message = data?.message || data?.error || text || res.statusText;
        throw new Error(`HTTP ${res.status}: ${message}`);
    }
    return data !== null ? data : text;
}
