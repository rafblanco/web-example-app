import axios, { AxiosInstance, AxiosResponse } from "axios";

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  protected constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  };

  private handleResponse = (response: AxiosResponse) => response;

  protected handleError = (error: any) => Promise.reject(error);
}
