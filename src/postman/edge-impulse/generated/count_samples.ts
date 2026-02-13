/**
 * Count all raw data by category.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/count?category=&labels=&filename=&maxLength=&minLength=&minFrequency=&maxFrequency=&signatureValidity=&includeDisabled=
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function count_samples(params: any, apiKey: string) {
  const url = buildEiUrl(
    "https://studio.edgeimpulse.com/api/:projectId/raw-data/count?category=&labels=&filename=&maxLength=&minLength=&minFrequency=&maxFrequency=&signatureValidity=&includeDisabled=",
    params ?? {}
  );

  return eiFetchJson(url, apiKey, { method: "GET" });
}
