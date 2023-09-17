import { Text } from "react-native"
import React from "react"
import { Screen } from "../components"
import * as Linking from "expo-linking"

export function NotFoundScreen() {
  const url = Linking.useURL()

  return (
    <Screen align="center" justify="center">
      <Text>404</Text>
      <Text>Path not found: {url}</Text>
    </Screen>
  )
}
