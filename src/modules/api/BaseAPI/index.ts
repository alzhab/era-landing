import { AxiosInstance, AxiosRequestConfig } from "axios";

export default class BaseAPI {
  constructor(private $http: AxiosInstance) {}

  protected async get(url: string, params?: AxiosRequestConfig) {
    try {
      return await this.$http.get(url, params);
    } catch (e) {
      console.log("HTTP GET Error", e);
    }
  }

  protected async post(
    url: string,
    body: { [key in string]: any },
    params?: AxiosRequestConfig
  ) {
    try {
      return await this.$http.post(url, body, params && params);
    } catch (e) {
      console.log("HTTP POST Error", e);
      return await this.$http.post(url, body, params && params);
    }
  }

  protected async put(url: string, params?: AxiosRequestConfig) {
    try {
      return await this.$http.put(url, params);
    } catch (e) {
      console.log("HTTP PUT Error", e);
      return await this.$http.put(url, params);
    }
  }

  protected async delete(url: string, params?: AxiosRequestConfig) {
    try {
      return await this.$http.delete(url, params);
    } catch (e) {
      console.log("HTTP DELETE Error", e);
      return await this.$http.delete(url, params);
    }
  }

  public getFormData(data: { [key in string]: any }) {
    const formData = new FormData();

    for (const dataKey in data) {
      if (data.hasOwnProperty(dataKey)) {
        const keys = dataKey.split("__");
        const key = keys.length === 1 ? keys[0] : `${keys[0]}[${keys[1]}]`;
        const value = data[dataKey as keyof typeof data];

        formData.append(key, value);
      }
    }

    return formData;
  }

  public getFirstError(
    errors: { [key in string]: string[] } = {}
  ): { error: string } {
    const errorsList = Object.values(errors || {});
    const firstErrorList = errorsList[0] || [];
    const firstError = firstErrorList.length
      ? firstErrorList[0]
      : "Unknown error";

    return { error: firstError };
  }

  protected wait(ms: number): any {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
