/**
 * Generate code to run the impulse on an embedded device using an organizational deployment block. When this step is complete use `downloadBuild` to download the artefacts.  Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/build-ondevice-model/organization
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function build_organizational_on_device_model(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/build-ondevice-model/organization", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
