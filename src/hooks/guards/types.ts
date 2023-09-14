interface GuardBase {
  condition: boolean;
  action: () => void;
  disabled?: boolean;
  refireOnFocus?: boolean;
}
