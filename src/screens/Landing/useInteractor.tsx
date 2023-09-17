import React, { createContext, useCallback, useContext } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { increment } from "../../state/features/counterSlice"
import { useNavigation } from "@react-navigation/native"
import { Routes } from "../../navigation/types"
import { useGuard } from "../../hooks/guards/useGuard"

type ProviderValue = ReturnType<typeof useInteractor>

const LandingContext = createContext<ProviderValue>({} as ProviderValue)

/**
 * `ProvideLandingInteractor`
 * This component is a wrapper for the any component that needs to use the `useLandingInteractor` hook.
 * Remember to add the `key` prop to like this:
 * ```tsx
 * <ProvideLandingInteractor key={Routes.SOME_SCREEN_ENUM_OR_UNIQUE_STRING>
 *
 * @param param0
 * @returns
 */
export function ProvideLandingInteractor({
  children,
}: {
  children: React.ReactNode
}) {
  const provider = useInteractor()
  return (
    <LandingContext.Provider value={provider}>
      {children}
    </LandingContext.Provider>
  )
}

/**
 * `useLandingInteractor`
 * This hook is uses the useInteractor sub-hook's context
 * so that it can be used in any child of the provider.
 */
export const useLandingInteractor = () => {
  return useContext(LandingContext)
}

function useInteractor() {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)

  const navigation = useNavigation()

  useGuard({
    action: () => {
      navigation.navigate(Routes.DETAILS, {
        id: count,
      })
    },
    refireOnFocus: true,
    condition: count >= 3,
    disabled: false,
  })

  const handleIncrement = useCallback(() => {
    dispatch(increment())
  }, [dispatch])

  return { count, handleIncrement }
}
