/**
 * White label admin only API to get the list of all organizations.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/organizations?name=<string>&active=<integer>&sort=<string>&limit=<integer>&offset=<integer>
 */
export async function get_all_organizations_within_a_white_label(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/organizations?name=<string>&active=<integer>&sort=<string>&limit=<integer>&offset=<integer>`, {
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
