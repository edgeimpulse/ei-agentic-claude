/**
 * Take the output from a DSP block and train a neural network using Keras. Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/train/keras/:learnId
 */
export async function train_model_keras(params, apiKey) {
    const projectId = params?.projectId;
    const learnId = params?.learnId;
    if (!projectId || !learnId) {
        throw new Error('Missing required parameters `projectId` and `learnId`. Pass via --params');
    }
    const { projectId: _p, learnId: _l, ...body } = params;
    if (!body.mode)
        body.mode = 'visual';
    const url = `https://studio.edgeimpulse.com/v1/api/${encodeURIComponent(String(projectId))}/jobs/train/keras/${encodeURIComponent(String(learnId))}`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(body),
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
