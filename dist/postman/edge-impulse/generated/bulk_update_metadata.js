/**
 * Bulk update the metadata of many data items in one go. This requires you to submit a CSV file with headers, one of which the columns should be named 'name'. The other columns are used as metadata keys.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/bulk-metadata
 */
export async function bulk_update_metadata(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/data/bulk-metadata`, {
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
