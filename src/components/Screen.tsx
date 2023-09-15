import {
  FlexStyle,
  SafeAreaView,
  StyleProp,
  View,
  ViewStyle,
} from "react-native"
import React from "react"
import { StatusBar } from "expo-status-bar"

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
  backgroundColor = "#fff",
  statusBar = "dark",
}) => {
  const style: StyleProp<ViewStyle> = {
    flex: 1,
    backgroundColor,
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
          },
        ]}
      >
        <StatusBar style={statusBar} />
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
      <StatusBar style={statusBar} />
      {children}
    </View>
  )
}

export default Screen
