import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counterSlice"
import { authReducer } from "./features/auth"
import { loggerMiddleware, authMiddleware } from "./middleware"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware, loggerMiddleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
