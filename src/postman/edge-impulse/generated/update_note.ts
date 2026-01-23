/**
 * Update a note from a project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/notes/:noteId/update
 */
export async function update_note(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/notes/:noteId/update`, {
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
