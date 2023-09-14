import { useIsFocused } from "@react-navigation/native";
import { useCallback, useEffect } from "react";

export function useGuard({
  condition,
  action,
  disabled,
  refireOnFocus,
}: GuardBase) {
  const focused = useIsFocused();

  const runGuard = useCallback(() => {
    if (condition && !disabled) {
      action();
    }
  }, [condition, action, disabled]);

  useEffect(() => {
    runGuard();
  }, [condition]);

  useEffect(() => {
    runGuard();
  }, [refireOnFocus && focused]);
}
