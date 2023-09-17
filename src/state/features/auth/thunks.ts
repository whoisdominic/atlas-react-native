import { createAsyncThunk } from "@reduxjs/toolkit"
import { placeholderService } from "@services"

// First, create the thunk
export const fetchManyUsers = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    return await placeholderService.getUsers()
  },
)
