const BASE_URL = "https://api.github.com";

export class Api {
  static async get(url: string) {
    try {
      const targetURL = BASE_URL + (url.startsWith("/") ? url : `/${url}`);
      const response = await fetch(targetURL);
      const data = await response.json();

      return { status: response.status, data };
    } catch (error) {
      console.error(error);
      return { status: null };
    }
  }
}
