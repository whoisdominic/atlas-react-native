import HttpClient from "./HttpClient"

class AuthService extends HttpClient {
  public constructor() {
    super({
      baseURL: "http://localhost:3000/api",
    })
  }

  public login = () => Promise.resolve()
  public logout = () => Promise.resolve()
}

export const authService = new AuthService()
