import { MiddlewareAPI, AnyAction } from "@reduxjs/toolkit"
import { logout } from "../features/auth/"

export const authMiddleware =
  (storeAPI: MiddlewareAPI) =>
  (next: (action: AnyAction) => void) =>
  (action: AnyAction) => {
    // If the action has a rejected status and the payload has a 401 or 403 status code
    if (
      action.type.endsWith("/rejected") &&
      (action.payload?.status === 401 || action.payload?.status === 403)
    ) {
      // Dispatch a logout action
      storeAPI.dispatch(logout())
    }

    // Always call next at the end of the middleware
    return next(action)
  }
