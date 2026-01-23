/**
 * DEPRECATED. Admin-only API to get list of all users that have been active in the past 30 days.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/users-ids/active
 */
export async function get_all_user_ids_active_last_30_days(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/admin/users-ids/active`, {
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
