import { createAsyncThunk } from "@reduxjs/toolkit"
import { serviceLayer } from "@services"

export const fetchManyUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    return await serviceLayer.placeholder.getAllUsers()
  },
)

export const fetchOneUser = createAsyncThunk(
  "users/fetchOneUser",
  async (id: string) => {
    return await serviceLayer.placeholder.getOneUser(id)
  },
)

export const fetchUsersPosts = createAsyncThunk(
  "users/fetchUsersPosts",
  async (id: string) => {
    return await serviceLayer.placeholder.getUsersPosts(id)
  },
)

export const fetchManyTodos = createAsyncThunk(
  "todos/fetchManyTodos",
  async () => {
    return await serviceLayer.placeholder.getManyTodos()
  },
)

export const fetchSingleTodo = createAsyncThunk(
  "todos/fetchSingleTodo",
  async (id: string) => {
    return await serviceLayer.placeholder.getSingleTodo(id)
  },
)

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, payload }: { id: string; payload: any }) => {
    return await serviceLayer.placeholder.updateTodo(id, payload)
  },
)

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async ({ id, payload }: { id: string; payload: any }) => {
    return await serviceLayer.placeholder.createTodo(id, payload)
  },
)

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string) => {
    return await serviceLayer.placeholder.deleteTodo(id)
  },
)

export const fetchManyPosts = createAsyncThunk(
  "posts/fetchManyPosts",
  async () => {
    return await serviceLayer.placeholder.getManyTodos()
  },
)

export const fetchSinglePost = createAsyncThunk(
  "posts/fetchSinglePost",
  async (id: string) => {
    return await serviceLayer.placeholder.getSingleTodo(id)
  },
)
