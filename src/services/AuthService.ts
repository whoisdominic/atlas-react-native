import { User } from "../state/features/types"
import HttpClient from "./HttpClient"

class AuthService extends HttpClient {
  public constructor() {
    super({
      baseURL: "http://localhost:3000/api",
    })
  }

  public login = () => Promise.resolve()
  public logout = () => Promise.resolve()
  public register = () => {
    return this.post<User>("register", {
      email: "",
      password: "",
      username: "",
    })
  }
}

export const authService = new AuthService()
