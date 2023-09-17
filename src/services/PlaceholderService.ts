import HttpClient from "./HttpClient"
import { Post, Todo, User } from "@types"

class PlaceholderService extends HttpClient {
  public constructor() {
    super({
      baseURL: "https://jsonplaceholder.typicode.com/",
    })
  }

  // Users
  public getAllUsers = () => this.get<User[]>("users")
  public getOneUser = (id: string) => this.get<User>(`user/${id}`)
  public getUsersPosts = (id: string) => this.get<Post[]>(`user/${id}/posts`)

  // Todos
  public getManyTodos = () => this.get<Todo[]>(`todos`)
  public getSingleTodo = (id: string) => this.get<Todo>(`todos/${id}`)
  public updateTodo = (id: string, payload: Todo) => {
    return this.put<Todo, Todo>(`todos/${id}`, payload)
  }
  public createTodo = (id: string, payload: Todo) => {
    return this.put<Todo, Todo>(`todos/${id}`, payload)
  }
  public deleteTodo = (id: string) => this.delete<Todo>(`todos/${id}`)
  // Posts
  public getManyPosts = () => this.get<Post[]>(`posts`)
  public getSinglePost = (id: string) => this.get<Post>(`posts/${id}`)
  public updatePost = (id: string, payload: Post) => {
    return this.put<Post, Post>(`posts/${id}`, payload)
  }
  public createPost = (id: string, payload: Post) => {
    return this.put<Post, Post>(`posts/${id}`, payload)
  }
}

export const placeholderService = new PlaceholderService()
