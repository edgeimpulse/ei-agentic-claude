/**
 * Deletes samples. Note that this does not delete the data from cold storage.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/batch/delete?category=<string>&labels=<string>&filename=<string>&maxLength=<integer>&minLength=<integer>&minFrequency=<number>&maxFrequency=<number>&signatureValidity=<string>&includeDisabled=<string>&ids=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function remove_multiple_samples(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/batch/delete?category=<string>&labels=<string>&filename=<string>&maxLength=<integer>&minLength=<integer>&minFrequency=<number>&maxFrequency=<number>&signatureValidity=<string>&includeDisabled=<string>&ids=<string>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
