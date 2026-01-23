/**
 * Used internally (from a data pipeline) to upload a picture of the data explorer
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/screenshot
 */
export async function upload_a_data_explorer_screenshot(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/screenshot`, {
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
