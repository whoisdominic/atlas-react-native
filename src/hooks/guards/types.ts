/**
 * `GuardConfig` is the configuration object for the `useGuard` hook. It allows
 * you to specify the conditions under which an action should be executed.
 * @property {boolean} condition - Determines whether the action should be executed.
 * The action is executed when this property is set to `true`.
 *
 * @property {Function} action - The function that will be executed when the
 * condition is met. It is recommended to use a function that returns `void`.
 *
 * @property {boolean} [disabled=false] - When set to `true`, the guard action is
 * disabled, and the action will not be executed, regardless of the condition property's value.
 *
 * @property {boolean} [refireOnFocus=false] - When set to `true`, the action will
 * be executed again every time the screen regains focus, as long as the condition is `true`.
 * @example
 * {
 *  condition: true,
 *  action: () => console.log('Hello World'),
 *  disabled: false,
 *  refireOnFocus: false,
 * }
 *
 * @since 1.0.0
 * @version 1.0.0
 */
interface GuardConfig {
  condition: boolean // Determines if the action should be executed
  action: () => void // The action to execute
  disabled?: boolean // Disable the guard action
  refireOnFocus?: boolean // Determine if the action should re-run on screen focus
}
