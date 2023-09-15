import { User } from "../state/features/types"
import HttpClient from "./HttpClient"

class UserService extends HttpClient {
  public constructor() {
    super("https://jsonplaceholder.typicode.com/")
  }

  public getUsers = () => this.instance.get<User[]>("users")
}

export const userService = new UserService()
