import { Text } from "react-native";
import React from "react";
import { Screen } from "../components";

export function FallBackScreen() {
  return (
    <Screen align="center" justify="center" backgroundColor="#411da2">
      <Text>Fall back</Text>
    </Screen>
  );
}
