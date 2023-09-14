import { ActivityIndicator, Text } from "react-native";
import React from "react";
import { Screen } from "../components";

export function FallBackScreen() {
  return (
    <Screen align="center" justify="center">
      <ActivityIndicator size="large" color="#411da2" />
    </Screen>
  );
}
