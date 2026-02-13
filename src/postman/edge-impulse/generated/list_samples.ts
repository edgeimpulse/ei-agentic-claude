/**
 * Retrieve all raw data by category.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data?category=<string>&limit=<integer>&offset=<integer>&excludeSensors=<boolean>&labels=<string>&filename=<string>&maxLength=<integer>&minLength=<integer>&minFrequency=<number>&maxFrequency=<number>&signatureValidity=<string>&includeDisabled=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function list_samples(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data?category=<string>&limit=<integer>&offset=<integer>&excludeSensors=<boolean>&labels=<string>&filename=<string>&maxLength=<integer>&minLength=<integer>&minFrequency=<number>&maxFrequency=<number>&signatureValidity=<string>&includeDisabled=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
