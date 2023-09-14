interface GuardBase {
  condition: boolean; // Determines if the action should be executed
  action: () => void; // The action to execute
  disabled?: boolean; // Disable the guard action
  refireOnFocus?: boolean; // Determine if the action should re-run on screen focus
}
