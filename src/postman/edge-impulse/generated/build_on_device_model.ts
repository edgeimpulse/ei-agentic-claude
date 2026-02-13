/**
 * Generate code to run the impulse on an embedded device. When this step is complete use `downloadBuild` to download the artefacts.  Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/build-ondevice-model?type=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function build_on_device_model(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/build-ondevice-model?type=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
