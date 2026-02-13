/**
 * Disables samples, ensuring that they are excluded from the dataset.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/batch/disable-samples?category=<string>&labels=<string>&filename=<string>&maxLength=<integer>&minLength=<integer>&minFrequency=<number>&maxFrequency=<number>&signatureValidity=<string>&includeDisabled=<string>&ids=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function disable_multiple_samples(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/batch/disable-samples?category=<string>&labels=<string>&filename=<string>&maxLength=<integer>&minLength=<integer>&minFrequency=<number>&maxFrequency=<number>&signatureValidity=<string>&includeDisabled=<string>&ids=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
