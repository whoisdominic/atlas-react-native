import { useIsFocused } from "@react-navigation/native";
import { useCallback, useEffect, useRef } from "react";

export function useGuard({
  condition,
  action,
  disabled,
  refireOnFocus,
}: GuardBase) {
  const focused = useIsFocused();

  const prevConditionRef = useRef(condition);
  const prevFocusedRef = useRef(focused);

  const runGuard = useCallback(() => {
    if (condition && !disabled) {
      action();
    }
  }, [condition, action, disabled]);

  useEffect(() => {
    if (
      condition !== prevConditionRef.current ||
      (refireOnFocus && focused !== prevFocusedRef.current)
    ) {
      runGuard();
    }

    prevConditionRef.current = condition;
    prevFocusedRef.current = focused;
  }, [condition, focused, runGuard, refireOnFocus]);
}
