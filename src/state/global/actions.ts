import { createAction } from "@reduxjs/toolkit"

interface SetPreLaunchDataPayload {
  counterValue: number
}

const SET_PRE_LAUNCH_DATA = "SET_PRE_LAUNCH_DATA"

export const setPreLaunchData =
  createAction<SetPreLaunchDataPayload>(SET_PRE_LAUNCH_DATA)
