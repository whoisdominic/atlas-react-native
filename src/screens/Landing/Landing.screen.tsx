import { Text, Pressable, View } from "react-native"
import React from "react"
import { Screen } from "../../components"
import { ProvideLandingInteractor, useLandingInteractor } from "./useInteractor"
import { Routes } from "../../navigation/types"
import * as Linking from "expo-linking"

export function LandingScreen() {
  const url = Linking.useURL()

  return (
    <ProvideLandingInteractor key={Routes.LANDING}>
      <Screen align="center" justify="center">
        <CountSection />
        <Text>{url}</Text>
      </Screen>
    </ProvideLandingInteractor>
  )
}

function CountSection() {
  const { count, handleIncrement } = useLandingInteractor()

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Pressable onPress={handleIncrement}>
        <Text
          style={{
            fontSize: 32,
          }}
        >
          Count: {count}
        </Text>
      </Pressable>
    </View>
  )
}
