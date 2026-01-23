/**
 * Preview a single file from a data item (same as downloadOrganizationDataFile but w/ content-disposition inline).
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId/files/preview?fileName=<string>
 */
export async function preview_file(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId/files/preview?fileName=<string>`, {
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
