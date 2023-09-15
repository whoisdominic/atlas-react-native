import { useIsFocused } from "@react-navigation/native";
import { useCallback, useEffect, useRef } from "react";

/**
 * `useGuard` is a React hook that conditionally executes a specified action.
 * The action is executed when the specified condition is true. The action execution
 * can be controlled further using the `disabled` and `refireOnFocus` options.
 *
 * @param params - The parameters for the useGuard hook.
 *
 * @example
 * // Executes the action if the condition is true
 * useGuard({ condition: true, action: () => console.log('Condition met') });
 *
 * // Executes the action if the condition is true and the screen is focused
 * useGuard({ condition: true, action: () => console.log('Condition met'), refireOnFocus: true });
 *
 * @since 1.0.0
 */
export function useGuard({
  condition,
  action,
  disabled,
  refireOnFocus,
}: GuardConfig) {
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
