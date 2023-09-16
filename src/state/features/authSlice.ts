import {
  AnyAction,
  createAction,
  createAsyncThunk,
  createSlice,
  MiddlewareAPI,
  PayloadAction,
} from "@reduxjs/toolkit"
import type { RootState } from "../store"
import { userService } from "../../services"
import { User } from "./types"
import { SET_PRE_LAUNCH_DATA } from "./actionTypes"

// First, create the thunk
export const fetchManyUsers = createAsyncThunk(
  "users/fetchByIdStatus",
  async (thunkAPI) => {
    const response = await userService.getUsers()
    return response
  },
)

enum ThunkStatus {
  IDLE = "idle",
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

// Define a type for the slice state
export interface AuthState {
  users: User[]
  loading: ThunkStatus
  isAuthenticated?: boolean
}

// Define the initial state using that type
const initialState: AuthState = {
  loading: ThunkStatus.IDLE,
  users: [],
}

interface SetPreLaunchDataPayload {
  counterValue: number
}

export const setPreLaunchData =
  createAction<SetPreLaunchDataPayload>(SET_PRE_LAUNCH_DATA)

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUsers: (state) => {
      state.users = []
    },
    login: (state, action) => {
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.isAuthenticated = false
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchManyUsers.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(JSON.stringify(action.payload, null, 2))
        state.users = action.payload
        state.loading = ThunkStatus.FULFILLED
      })
      .addCase(fetchManyUsers.pending, (state, action) => {
        state.loading = ThunkStatus.PENDING
      })
      .addCase(fetchManyUsers.rejected, (state, action) => {
        state.loading = ThunkStatus.REJECTED
      })
      .addCase(setPreLaunchData, (state, action) => {
        // The payload should have the data for this slice
        // state. = action.payload.counterValue; // replace counterValue with the actual key holding the value for the counter in your payload
      })
  },
})

export const { resetUsers, login, logout } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const userCount = (state: RootState) => state.auth.users.length

export default authSlice.reducer
