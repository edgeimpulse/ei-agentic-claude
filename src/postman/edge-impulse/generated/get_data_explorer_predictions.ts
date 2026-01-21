/**
 * Predictions for every data explorer point (only available when using current impulse to populate data explorer)
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/predictions
 */
export async function get_data_explorer_predictions(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/predictions`, {
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
