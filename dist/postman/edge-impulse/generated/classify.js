/**
 * Classifies all items in the testing dataset against the current impulse. Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/classify
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function classify(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/classify", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
