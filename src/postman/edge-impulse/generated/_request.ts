export type Primitive = string | number | boolean;
export type Params = Record<string, unknown>;

function isPrimitive(v: unknown): v is Primitive {
  const t = typeof v;
  return t === "string" || t === "number" || t === "boolean";
}

/**
 * Build a URL from a template that may include path placeholders like `:projectId`
 * and query placeholders like `?foo=&bar=`.
 */
export function buildEiUrl(template: string, params: Params = {}): string {
  const url = new URL(template);
  const consumed = new Set<string>();

  // Substitute :param tokens in the pathname
  url.pathname = url.pathname.replace(/:([A-Za-z0-9_]+)/g, (_m, key: string) => {
    const v = (params as Record<string, unknown>)[key];
    if (v === undefined || v === null) {
      throw new Error(`Missing required path parameter "${key}" for URL template: ${template}`);
    }
    if (!isPrimitive(v)) {
      throw new Error(`Path parameter "${key}" must be a primitive (string/number/boolean); got ${typeof v}`);
    }
    consumed.add(key);
    return encodeURIComponent(String(v));
  });

  // Populate query params from remaining primitive params
  for (const [k, v] of Object.entries(params)) {
    if (consumed.has(k)) continue;
    if (v === undefined || v === null) continue;
    if (!isPrimitive(v)) continue;
    url.searchParams.set(k, String(v));
  }

  // Remove placeholder keys from template like ?foo=&bar= unless caller provided a value
  for (const [k, v] of Array.from(url.searchParams.entries())) {
    if (v === "" && !Object.prototype.hasOwnProperty.call(params, k)) {
      url.searchParams.delete(k);
    }
  }

  return url.toString();
}

/**
 * Fetch JSON from EI. Throws on non-JSON responses and includes a helpful snippet.
 */
export async function eiFetchJson(url: string, apiKey: string, init: RequestInit): Promise<unknown> {
  const headers: HeadersInit = {
    "x-api-key": apiKey,
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(init.headers || {}),
  };

  const res = await fetch(url, { ...init, headers });

  const contentType = res.headers.get("content-type") || "";
  const text = await res.text();

  if (!contentType.includes("application/json")) {
    throw new Error(
      `Unexpected non-JSON response from server (${res.status} ${res.statusText}). URL=${url}\nBody (first 1000 chars):\n${text.slice(0, 1000)}`
    );
  }

  try {
    const json = JSON.parse(text);
    if (res.ok) return json;

    const msg = typeof json === "object" && json !== null && "message" in (json as any) ? String((json as any).message) : JSON.stringify(json);
    throw new Error(`Edge Impulse API error (${res.status}): ${msg}`);
  } catch (e) {
    throw new Error(`Failed to parse JSON response (${res.status} ${res.statusText}). URL=${url}\nBody (first 1000 chars):\n${text.slice(0, 1000)}`);
  }
}
