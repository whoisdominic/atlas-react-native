import { createAsyncThunk } from "@reduxjs/toolkit"
import { placeholderService } from "@services"

export const fetchManyUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    return await placeholderService.getAllUsers()
  },
)

export const fetchOneUser = createAsyncThunk(
  "users/fetchOneUser",
  async (id: string) => {
    return await placeholderService.getOneUser(id)
  },
)

export const fetchUsersPosts = createAsyncThunk(
  "users/fetchUsersPosts",
  async (id: string) => {
    return await placeholderService.getUsersPosts(id)
  },
)

export const fetchManyTodos = createAsyncThunk(
  "todos/fetchManyTodos",
  async () => {
    return await placeholderService.getManyTodos()
  },
)

export const fetchSingleTodo = createAsyncThunk(
  "todos/fetchSingleTodo",
  async (id: string) => {
    return await placeholderService.getSingleTodo(id)
  },
)

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, payload }: { id: string; payload: any }) => {
    return await placeholderService.updateTodo(id, payload)
  },
)

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async ({ id, payload }: { id: string; payload: any }) => {
    return await placeholderService.createTodo(id, payload)
  },
)

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string) => {
    return await placeholderService.deleteTodo(id)
  },
)

export const fetchManyPosts = createAsyncThunk(
  "posts/fetchManyPosts",
  async () => {
    return await placeholderService.getManyTodos()
  },
)

export const fetchSinglePost = createAsyncThunk(
  "posts/fetchSinglePost",
  async (id: string) => {
    return await placeholderService.getSingleTodo(id)
  },
)
