/**
 * Upload a photo for a user. This function is only available through a JWT token, and is not available for all users.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/users/:userId/photo
 */
export async function upload_photo(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/users/:userId/photo`, {
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
