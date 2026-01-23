/**
 * Deletes the white label with the given id.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier
 */
export async function deletes_a_white_label(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier`, {
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
