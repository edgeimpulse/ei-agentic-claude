/**
 * Fetch evaluation metrics for a trained Keras block in Edge Impulse.
 * @param apiKey - Edge Impulse API key
 * @param projectId - Project ID
 * @param learnId - Learn (block) ID
 * @returns Model evaluation metrics and configuration
 */
export async function getKerasBlockEvaluation(apiKey: string, projectId: string, learnId: string) {
  const url = `https://studio.edgeimpulse.com/v1/api/${projectId}/training/keras/${learnId}`;
  const response = await fetch(url, {
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json"
    }
  });
  if (response.ok) {
    return await response.json();
  }
  // Print full error details for debugging
  const errorText = await response.text();
  const errorInfo = {
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers.entries()),
    body: errorText
  };
  console.error("Edge Impulse API evaluation error response:", JSON.stringify(errorInfo, null, 2));
  if (response.status === 404) {
    throw new Error(`Evaluation not available via API (404). Please check the Edge Impulse dashboard for results.`);
  }
  throw new Error(`Failed to fetch Keras block evaluation: ${response.status}`);
}
