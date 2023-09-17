import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios"

interface HttpClientConfig {
  baseURL: string
  getToken?: () => string
}

class HttpClientError extends Error {
  public code: string
  public message: string

  public constructor({
    code,
    message,
  }: {
    code: string | undefined
    message: string
  }) {
    super(message)
    this.code = code ?? ""
    this.message = message
  }
}

export abstract class HttpClient {
  private instance: AxiosInstance
  private getToken?: () => string

  public constructor({ baseURL, getToken }: HttpClientConfig) {
    this.instance = axios.create({
      baseURL,
    })
    this.initializeResponseInterceptor()
    this.initializeRequestInterceptor()
    this.getToken = getToken
  }

  protected async get<T>(url: string): Promise<T> {
    return this.handleResponse(await this.instance.get<T>(url))
  }

  protected async post<T>(url: string, payload: any): Promise<T> {
    return this.handleResponse(await this.instance.post<T>(url, payload))
  }

  protected async put<T>(url: string, payload: any): Promise<T> {
    return this.handleResponse(await this.instance.put<T>(url, payload))
  }

  protected async delete<T>(url: string): Promise<T> {
    return this.handleResponse(await this.instance.delete<T>(url))
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest)
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      // We need to give a function here to be able to pass the handle
      (response) => response,
      this.handleError,
    )
  }

  private handleRequest: (
    value: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig = (config) => {
    if (!this.getToken) return config

    const token = this.getToken()
    if (!token) return config

    config.headers.Authorization = `Bearer ${token}`

    return config
  }

  private handleResponse = ({ data }: AxiosResponse) => data

  private handleError = ({ message, code }: AxiosError) => {
    throw new HttpClientError({ code, message })
  }
}

export default HttpClient
