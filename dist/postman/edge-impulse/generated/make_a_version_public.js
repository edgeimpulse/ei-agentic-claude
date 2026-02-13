/**
 * Make a version of a project public. This makes all data and state available (read-only) on a public URL, and allows users to clone this project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/versions/:versionId/make-public
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function make_a_version_public(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/versions/:versionId/make-public", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
