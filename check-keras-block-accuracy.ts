import fetch from 'node-fetch';

async function getKerasBlockEvaluation(apiKey: string, projectId: string, learnId: string) {
  const url = `https://studio.edgeimpulse.com/v1/api/${projectId}/training/keras/${learnId}`;
  const response = await fetch(url, {
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API error: ${response.status} ${response.statusText}\n${errorText}`);
  }
  return response.json();
}

(async () => {
  const apiKey = process.env.EI_API_KEY;
  if (!apiKey) {
    console.error('Please set EI_API_KEY environment variable');
    process.exit(1);
  }
  const projectId = process.env.PROJECT_ID || '814590';
  const learnId = process.env.LEARN_ID || '50';
  try {
    const result = await getKerasBlockEvaluation(apiKey, projectId, learnId);
    console.log('Keras Block Evaluation Metrics:');
    console.log(JSON.stringify(result, null, 2));
    if (result.accuracy !== undefined) {
      console.log(`\nAccuracy: ${result.accuracy}`);
    } else if (result.metrics && result.metrics.accuracy !== undefined) {
      console.log(`\nAccuracy: ${result.metrics.accuracy}`);
    } else {
      console.log('\nAccuracy metric not found in response.');
    }
  } catch (err) {
    console.error('Error fetching Keras block evaluation:', err);
  }
})();
