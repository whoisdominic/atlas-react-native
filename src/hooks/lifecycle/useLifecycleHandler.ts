import { useEffect, useState } from "react";
import { AppState, AppStateStatus } from "react-native";

interface UseLifecycleHandlerProps {
  onForeground?: () => any | Promise<any>;
  onBackground?: () => any | Promise<any>;
}

export function useLifecycleHandler({
  onBackground,
  onForeground,
}: UseLifecycleHandlerProps) {
  const [previousState, setPreviousState] = useState(AppState.currentState);
  const [currentState, setCurrentState] = useState(AppState.currentState);

  function onAppStateChange(state: AppStateStatus) {
    if (previousState.match(/inactive|background/) && state === "active") {
      onForeground && onForeground();
    }

    if (previousState.match(/active/) && state.match(/inactive|background/)) {
      onBackground && onBackground();
    }

    setPreviousState(currentState);
    setCurrentState(state);
  }

  useEffect(() => {
    const listener = AppState.addEventListener("change", onAppStateChange);
    return () => {
      listener.remove();
    };
  }, []);

  return {
    previousState,
    currentState,
  };
}
