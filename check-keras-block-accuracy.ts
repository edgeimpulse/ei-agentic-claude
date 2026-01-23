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
  const apiKey = 'ei_00f1f4cd29c8f2254d4793cf6736e66501456bb809036099246a4ecb5cb28ff9';
  const projectId = '814590';
  const learnId = '50';
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
