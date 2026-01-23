/**
 * List all devices for this project. Devices get included here if they connect to the remote management API or if they have sent data to the ingestion API and had the `device_id` field set.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/devices
 */
export async function lists_devices(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/devices`, {
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
