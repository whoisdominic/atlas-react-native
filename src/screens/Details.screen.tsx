import { StyleSheet, Button, View, ScrollView } from "react-native"
import React, { useCallback, useMemo, useRef } from "react"
import { Screen, ThemedText } from "../components"
import { useFocusEffect, useRoute } from "@react-navigation/native"
import { RootStackParamList, Routes } from "../navigation/types"

import type { RouteProp } from "@react-navigation/native"
import { useAppDispatch, useAppSelector, useTheme } from "../hooks"
import { reset, selectCount } from "@state"
import BottomSheet from "@gorhom/bottom-sheet"
import { theme } from "@constants"

type DetailsScreenRouteProp = RouteProp<RootStackParamList, Routes.DETAILS>

export function DetailsScreen() {
  const {
    params: { id },
  } = useRoute<DetailsScreenRouteProp>()

  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null)

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], [])

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index)
  }, [])

  const { oppositeMode } = useTheme()

  const handleOpenSheet = useCallback(() => {
    bottomSheetRef.current?.expand()
  }, [])

  useFocusEffect(() => {
    bottomSheetRef.current?.close()
  })

  return (
    <Screen align="center" justify="center">
      <ScrollView
        onTouchStart={() => {
          bottomSheetRef.current?.close()
        }}
        style={{
          width: "100%",
        }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
        }}
      >
        <ThemedText>Params: {id}</ThemedText>
        <Button title="Show bottom sheet" onPress={handleOpenSheet} />
        <Button
          title="Reset count"
          onPress={() => {
            dispatch(reset())
          }}
        />
        <ThemedText>Count: {count}</ThemedText>
      </ScrollView>
      <BottomSheet
        onClose={() => {
          bottomSheetRef.current?.close()
        }}
        enablePanDownToClose={false}
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={{
          backgroundColor: "transparent",
        }}
        backgroundStyle={{
          backgroundColor: theme[oppositeMode].background,
        }}
      >
        <View style={styles.contentContainer}>
          <ThemedText
            style={{
              color: theme[oppositeMode].text,
            }}
          >
            Awesome 🎉
          </ThemedText>
        </View>
      </BottomSheet>
    </Screen>
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
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
})
