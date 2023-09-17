import React, { createContext, useCallback, useContext, useState } from "react"

type ProviderThemeValue = ReturnType<typeof useInteractor>

const ThemeContext = createContext<ProviderThemeValue>({
  mode: "light",
  toggleTheme: () => {},
} as ProviderThemeValue)

/**
 * `ProvideThemeInteractor`
 * This component is a wrapper for the any component that needs to use the `useLandingInteractor` hook.
 * Remember to add the `key` prop to like this:
 * ```tsx
 * <ProvideThemeInteractor key={Routes.SOME_SCREEN_ENUM_OR_UNIQUE_STRING>
 *
 * @param param0
 * @returns
 */
export function ProvideTheme({ children }: { children: React.ReactNode }) {
  const provider = useInteractor()
  return (
    <ThemeContext.Provider value={provider}>{children}</ThemeContext.Provider>
  )
}

/**
 * `useThemeInteractor`
 * This hook is uses the useInteractor sub-hook's context
 * so that it can be used in any child of the provider.
 * It is exported so that it can be used in the `ProvideThemeInteractor`'s children.
 */
export const useTheme = () => {
  return useContext(ThemeContext)
}

/**
 * `useInteractor`
 * This is the actual hook that is used by the `useThemeInteractor` hook.
 * This is where you put all of your logic and return the values that you want to expose.
 * Think of the values and hooks you dont export and being "private" and the ones you do export as being "public".
 */
function useInteractor() {
  const [mode, setMode] = useState<"light" | "dark">("light")

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"))
  }, [])

  return {
    mode,
    toggleTheme,
  }
}
