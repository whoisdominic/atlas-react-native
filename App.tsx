import { useCallback } from "react"
import { Provider } from "react-redux"
import * as SplashScreen from "expo-splash-screen"

import { ProvideTheme, usePreLaunch } from "./src/hooks"
import { RootNavigation } from "./src/navigation/RootNavigation"
import { FallBackScreen } from "./src/screens"
import { store } from "./src/state/store"

export default function App() {
  const { appIsReady } = usePreLaunch()

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) return <FallBackScreen />

  return (
    <Provider store={store}>
      <ProvideTheme>
        <RootNavigation onLayout={onLayoutRootView} />
      </ProvideTheme>
    </Provider>
  )
}
