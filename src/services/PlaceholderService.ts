import { User } from "../state/features/types"
import HttpClient from "./HttpClient"

class PlaceholderService extends HttpClient {
  public constructor() {
    super({
      baseURL: "https://jsonplaceholder.typicode.com/",
    })
  }

  public getUsers = () => this.get<User[]>("users")
}

export const placeholderService = new PlaceholderService()
