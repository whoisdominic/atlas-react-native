import { Text, Pressable, View, Switch } from "react-native"
import React from "react"
import { Container, Row, Screen, Spacer, ThemedText } from "@components"
import { ProvideLandingInteractor, useLandingInteractor } from "./useInteractor"
import { Routes } from "../../navigation/types"
import * as Linking from "expo-linking"
import { CopyStrings, theme } from "@constants"
import { useTheme } from "@hooks"

export function LandingScreen() {
  const url = Linking.useURL()

  return (
    <ProvideLandingInteractor key={Routes.LANDING}>
      <Screen align="center" justify="center">
        <WelcomeSection />
        <CountSection />
      </Screen>
    </ProvideLandingInteractor>
  )
}

function WelcomeSection() {
  const { toggleTheme, mode } = useTheme()

  return (
    <Container align="center" testID="welcome">
      <ThemedText
        style={{
          fontSize: 32,
          textAlign: "center",
        }}
      >
        {CopyStrings.welcome}
      </ThemedText>
      <Spacer vert={24} />
      <ThemedText
        style={{
          maxWidth: 300,
          fontSize: 16,
          textAlign: "center",
        }}
      >
        {CopyStrings.welcomeMessage}
      </ThemedText>
      <Spacer vert={24} />
      <Row>
        <Switch
          trackColor={{ false: "#767577", true: theme[mode].secondary }}
          thumbColor={mode === "light" ? theme[mode].primary : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={mode === "light"}
        />
      </Row>
    </Container>
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
        <ThemedText
          style={{
            fontSize: 32,
          }}
        >
          Count: {count}
        </ThemedText>
      </Pressable>
    </View>
  )
}
