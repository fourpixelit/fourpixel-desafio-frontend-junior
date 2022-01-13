const BASE_URL = "https://api.github.com";

function buildUrl(url: string) {
  let targetUrl = url;

  if (!targetUrl.startsWith(BASE_URL))
    targetUrl = BASE_URL + (url.startsWith("/") ? url : `/${url}`);

  return targetUrl;
}

export class Api {
  static async get(url: string) {
    try {
      const headers = new Headers();
      headers.set("accept", "application/vnd.github.v3+json");

      const targetURL = buildUrl(url);

      const response = await fetch(targetURL, {
        method: "GET",
        headers,
      });
      const data = await response.json();

      return { status: response.status, data };
    } catch (error) {
      console.error(error);
      return { status: null };
    }
  }
}
