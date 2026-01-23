/**
 * Retrieve all projects for the organization.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/projects
 */
export async function get_projects(params, apiKey) {
    // `organizationId` is optional. If provided, call org-scoped endpoint;
    // otherwise call the user-facing projects endpoint. Any primitive params
    // (string/number/boolean) will be appended as query parameters (e.g. `type`).
    const organizationId = params?.organizationId;
    const query = new URLSearchParams();
    if (params) {
        for (const [k, v] of Object.entries(params)) {
            if (k === 'organizationId')
                continue;
            if (v === undefined || v === null)
                continue;
            const t = typeof v;
            if (t === 'string' || t === 'number' || t === 'boolean') {
                query.append(k, String(v));
            }
        }
    }
    const urlBase = organizationId
        ? `https://studio.edgeimpulse.com/api/organizations/${encodeURIComponent(String(organizationId))}/projects`
        : `https://studio.edgeimpulse.com/v1/api/projects`;
    const url = query.toString() ? `${urlBase}?${query.toString()}` : urlBase;
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
        const text = await res.text();
        throw new Error(`Unexpected non-JSON response from server: ${text.slice(0, 1000)}`);
    }
    return res.json();
}
