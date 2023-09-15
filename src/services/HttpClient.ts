import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios"

export class HttpClient {
  protected readonly instance: AxiosInstance

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    })
    this.initializeResponseInterceptor()
    this.initializeRequestInterceptor()
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest)
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    )
  }

  private handleRequest: (
    value: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig = (config) => {
    console.debug("Request ran: ", config?.url)
    return config
  }

  private handleResponse = ({ data }: AxiosResponse) => data

  protected handleError = (error: AxiosError) => {
    return Promise.reject(error)
  }
}

export default HttpClient
