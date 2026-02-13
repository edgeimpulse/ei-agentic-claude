/**
 * Get all unlabeled items from the object detection queue.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/label-object-detection-queue
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function object_detection_label_queue(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/label-object-detection-queue", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
