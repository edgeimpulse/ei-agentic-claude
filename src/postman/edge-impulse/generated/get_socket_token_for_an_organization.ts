/**
 * Get a token to authenticate with the web socket interface.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/socket-token
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_socket_token_for_an_organization(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/socket-token", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
