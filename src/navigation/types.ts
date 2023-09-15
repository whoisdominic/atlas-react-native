export enum Routes {
  LANDING = "Landing",
  DETAILS = "Details",
  FALLBACK = "Fallback",
  NOTFOUND = "NotFound",
}

export type RootStackParamList = {
  [Routes.LANDING]: undefined
  [Routes.FALLBACK]: undefined
  [Routes.DETAILS]: { id: number }
  [Routes.NOTFOUND]: undefined
}

export const initialRoute = Routes.LANDING

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
