import { useEffect, useState } from "react"
import * as SplashScreen from "expo-splash-screen"
import { store } from "@state"
import { setPreLaunchData } from "@state"

export const usePreLaunch = () => {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        SplashScreen.preventAutoHideAsync()
        // TODO: Load fonts or anything else you need HERE

        // Load pre-launch data: this data can be used to seed your store
        // Configure store with preLaunchData
        store.dispatch(setPreLaunchData({ counterValue: 0 }))
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 5000))
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  return { appIsReady }
}
