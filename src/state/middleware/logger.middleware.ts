import { MiddlewareAPI, AnyAction } from "@reduxjs/toolkit"

export const loggerMiddleware =
  (storeAPI: MiddlewareAPI) =>
  (next: (action: AnyAction) => void) =>
  (action: AnyAction) => {
    console.log("dispatching", action)
    let result = next(action)
    console.log("next state", storeAPI.getState())
    return result
  }
