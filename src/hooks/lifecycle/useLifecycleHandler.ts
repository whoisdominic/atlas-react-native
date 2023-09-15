import { useEffect, useState, useCallback } from "react"
import { AppState, AppStateStatus } from "react-native"

/**
 * Properties for the useLifecycleHandler hook.
 */
interface UseLifecycleHandlerProps {
  /**
   * A callback function to be invoked when the app transitions to the "active" state
   * from a "background" or "inactive" state.
   */
  onForeground?: () => any | Promise<any>
  /**
   * A callback function to be invoked when the app transitions to the "background"
   * or "inactive" state from an "active" state.
   */
  onBackground?: () => any | Promise<any>
}

/**
 * A hook that provides callbacks for when the app transitions between "active"
 * and "background" or "inactive" states. It also returns the current and previous
 * app states for further utility.
 *
 * @param props - The properties to configure the lifecycle handler.
 * @returns An object containing the `previousState` and `currentState` of the app.
 *
 * @example
 * useLifecycleHandler({
 *   onForeground: () => console.log("App is now in the foreground"),
 *   onBackground: () => console.log("App is now in the background"),
 * });
 */
export function useLifecycleHandler({
  onBackground,
  onForeground,
}: UseLifecycleHandlerProps) {
  const [previousState, setPreviousState] = useState<AppStateStatus>(
    AppState.currentState,
  )
  const [currentState, setCurrentState] = useState<AppStateStatus>(
    AppState.currentState,
  )

  const onAppStateChange = useCallback(
    (state: AppStateStatus) => {
      if (previousState.match(/inactive|background/) && state === "active") {
        onForeground?.()
      }

      if (previousState.match(/active/) && state.match(/inactive|background/)) {
        onBackground?.()
      }

      setPreviousState(currentState)
      setCurrentState(state)
    },
    [currentState, onForeground, onBackground, previousState],
  )

  useEffect(() => {
    const listener = AppState.addEventListener("change", onAppStateChange)

    return () => {
      listener.remove()
    }
  }, [onAppStateChange])

  return {
    previousState,
    currentState,
  }
}
