import {
  FlexStyle,
  SafeAreaView,
  StyleProp,
  View,
  ViewStyle,
  Text,
} from "react-native"
import React from "react"
import { StatusBar } from "expo-status-bar"
import { useTheme } from "@hooks"
import { theme } from "@constants"

interface Props {
  children: React.ReactNode
  safe?: boolean
  backgroundColor?: string
  padding?: number
  justify?: FlexStyle["justifyContent"]
  align?: FlexStyle["alignItems"]
  statusBar?: "dark"
}

export const Screen: React.FC<Props> = ({
  children,
  align,
  justify,
  padding,
  safe = true,
  statusBar = "dark",
}) => {
  const { mode } = useTheme()

  const style: StyleProp<ViewStyle> = {
    flex: 1,
  }

  if (safe) {
    return (
      <SafeAreaView
        style={[
          style,
          {
            justifyContent: justify,
            alignItems: align,
            padding,
            backgroundColor: theme[mode].background,
          },
        ]}
      >
        <StatusBar style={mode === "dark" ? "light" : "dark"} />
        {children}
      </SafeAreaView>
    )
  }

  return (
    <View
      style={[
        style,
        {
          justifyContent: justify,
          alignItems: align,
          padding,
        },
      ]}
    >
      <StatusBar style={mode === "dark" ? "light" : "dark"} />
      {children}
    </View>
  )
}

export default Screen
