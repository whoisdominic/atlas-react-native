import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ThunkStatus, User } from "src/types"
import { fetchManyUsers } from "./thunks"
// Define a type for the slice state
export interface PlaceholderState {
  loading: ThunkStatus
  users: User[]
}

// Define the initial state using that type
const initialState: PlaceholderState = {
  loading: ThunkStatus.IDLE,
  users: [],
}

export const PlaceholderSlice = createSlice({
  name: "Placeholder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchManyUsers.fulfilled, (state, action) => {
        // Add user to the state array
        state.users = action.payload
        state.loading = ThunkStatus.FULFILLED
      })
      .addCase(fetchManyUsers.pending, (state) => {
        state.loading = ThunkStatus.PENDING
      })
      .addCase(fetchManyUsers.rejected, (state) => {
        state.loading = ThunkStatus.REJECTED
      })
  },
})

export const {} = PlaceholderSlice.actions
export const { reducer: PlaceholderReducer } = PlaceholderSlice

export default PlaceholderReducer
