/**
 * List all Edge Impulse projects for the authenticated user.
 * @param apiKey - Edge Impulse API key
 * @returns List of projects
 */
export async function listProjects(apiKey) {
    const url = "https://studio.edgeimpulse.com/v1/api/projects";
    const response = await fetch(url, {
        headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json"
        }
    });
    if (response.ok) {
        return (await response.json());
    }
    const error = (await response.json());
    throw new Error(`Edge Impulse API error: ${error.message}`);
}
