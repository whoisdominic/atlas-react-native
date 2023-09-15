import { StyleSheet, Button, Text, View, ScrollView } from "react-native"
import React from "react"
import { Screen } from "../components"
import { useRoute } from "@react-navigation/native"
import { RootStackParamList, Routes } from "../navigation/types"

import type { RouteProp } from "@react-navigation/native"
import { useAppDispatch, useAppSelector } from "../hooks"
import { fetchManyUsers } from "../state/features/authSlice"
import { User } from "../state/features/types"

type DetailsScreenRouteProp = RouteProp<RootStackParamList, Routes.DETAILS>

export function DetailsScreen() {
  const {
    params: { id },
  } = useRoute<DetailsScreenRouteProp>()

  const { loading, users } = useAppSelector((state) => state.auth)

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
        <Text>ID: {id}</Text>
        <Button
          title="Try thunk"
          onPress={() => {
            dispatch(fetchManyUsers())
          }}
        />
        <Text>Result: {id}</Text>
        <Text>Loading: {loading}</Text>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />
        })}
      </ScrollView>
    </Screen>
  )
}

const UserCard = ({ user }: { user: User }) => {
  return (
    <View style={styles.cardContainer}>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
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
