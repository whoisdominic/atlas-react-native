import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ThunkStatus } from "@types"
// Define a type for the slice state
export interface AuthState {
  loading: ThunkStatus
  token: string
}

// Define the initial state using that type
const initialState: AuthState = {
  loading: ThunkStatus.IDLE,
  token: "",
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = ""
    },
    login: (state, { payload }: PayloadAction<string>) => {
      state.token = payload
    },
  },
  extraReducers: (builder) => {},
})

export const { login, logout } = authSlice.actions
export const { reducer: authReducer } = authSlice

export default authReducer
