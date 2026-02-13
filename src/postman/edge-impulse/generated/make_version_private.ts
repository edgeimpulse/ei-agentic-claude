/**
 * Make a public version private.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/versions/:versionId/make-private
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function make_version_private(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/versions/:versionId/make-private", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
