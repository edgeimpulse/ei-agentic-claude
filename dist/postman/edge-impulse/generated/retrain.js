export async function retrain(params, apiKey) {
    const projectId = params?.projectId;
    if (!projectId) {
        throw new Error('Missing required parameter `projectId`. Pass via --params');
    }
    const { projectId: _p, ...body } = params || {};
    const url = `https://studio.edgeimpulse.com/v1/api/${encodeURIComponent(String(projectId))}/jobs/retrain`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(body || {}),
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
