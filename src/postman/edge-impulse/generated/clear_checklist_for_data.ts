/**
 * Clear all checklist flags for selected data items.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/clear-checklist?dataset=<string>&dataIds=<string>&filter=<string>
 */
export async function clear_checklist_for_data(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/data/clear-checklist?dataset=<string>&dataIds=<string>&filter=<string>`, {
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
