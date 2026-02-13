/**
 * Get count for unlabeled items from the object detection queue.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/label-object-detection-queue/count
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function object_detection_label_queue_count(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/label-object-detection-queue/count", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
