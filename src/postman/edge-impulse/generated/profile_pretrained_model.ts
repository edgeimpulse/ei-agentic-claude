/**
 * Returns the latency, RAM and ROM used for the pretrained model - upload first via  `uploadPretrainedModel`. This is using the project's selected latency device. Updates are streamed over the websocket API (or can be retrieved through the /stdout endpoint). Use getProfileTfliteJobResult to get the results when the job is completed.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/pretrained-model/profile
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function profile_pretrained_model(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/pretrained-model/profile", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
