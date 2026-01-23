/**
 * Change the role of a member in an organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/members/:memberId/role
 */
export async function set_member_role(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/members/:memberId/role`, {
        method: 'POST',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        // body: JSON.stringify(params), // Uncomment for POST/PUT
    });
    return res.json();
}
