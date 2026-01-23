/**
 * Resend an invitation to a member in an organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/members/:memberId/resend-invite
 */
export async function resend_invitation(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/members/:memberId/resend-invite`, {
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
