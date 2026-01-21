/**
 * Admin-only API to delete an organization. If `fullDeletion` is set, it deletes the organization's identifiable information and files. Otherwise, it soft deletes the organization by setting its `delete_date` value.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/admin/organizations/:organizationId?fullDeletion=<boolean>
 */
export async function delete_an_organization(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/admin/organizations/:organizationId?fullDeletion=<boolean>`, {
        method: 'DELETE',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        // body: JSON.stringify(params), // Uncomment for POST/PUT
    });
    return res.json();
}
