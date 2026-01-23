/**
 * Delete user profile photo. This function is only available through a JWT token.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/user/photo
 */
export async function delete_photo(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/user/photo`, {
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
