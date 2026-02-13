/**
 * Get a token to authenticate with the web socket interface.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/socket-token
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_socket_token(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/socket-token", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
