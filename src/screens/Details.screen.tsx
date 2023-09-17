import { StyleSheet, Button, View, ScrollView } from "react-native"
import React from "react"
import { Screen, ThemedText } from "../components"
import { useRoute } from "@react-navigation/native"
import { RootStackParamList, Routes } from "../navigation/types"

import type { RouteProp } from "@react-navigation/native"
import { useAppDispatch, useAppSelector } from "../hooks"
import { User } from "src/types"
import { reset, selectCount } from "@state"

type DetailsScreenRouteProp = RouteProp<RootStackParamList, Routes.DETAILS>

export function DetailsScreen() {
  const {
    params: { id },
  } = useRoute<DetailsScreenRouteProp>()

  const { loading } = useAppSelector((state) => state.auth)
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
    <Screen align="center" justify="center">
      <ScrollView
        style={{
          width: "100%",
        }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
        }}
      >
        <ThemedText>ID: {id}</ThemedText>
        <Button
          title="Reset count"
          onPress={() => {
            dispatch(reset())
          }}
        />
        <ThemedText>Result: {count}</ThemedText>
        <ThemedText>Loading: {loading}</ThemedText>
      </ScrollView>
    </Screen>
  )
}

const UserCard = ({ user }: { user: User }) => {
  return (
    <View style={styles.cardContainer}>
      <ThemedText>{user.name}</ThemedText>
      <ThemedText>{user.email}</ThemedText>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "80%",
    padding: 16,
    borderRadius: 8,
    backgroundColor: "white",
    marginBottom: 16,
  },
})
