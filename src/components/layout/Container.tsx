import { View, FlexStyle, ViewStyle } from "react-native"
import React from "react"
import { StandardPositions } from "../StandardPositions"
import { normalize } from "@utils"

interface ContainerProps extends StandardPositions {
  align?: FlexStyle["alignItems"]
  alignSelf?: FlexStyle["alignItems"]
  justify?: FlexStyle["justifyContent"]
  width?: number
  height?: number
  zIndex?: number
  children?: React.ReactNode
  flexDirection?: FlexStyle["flexDirection"]
  style?: ViewStyle
  flex?: number
  minHeight?: number
  minWidth?: number
  color?: string
  borderRadius?: number
}

/**
 Basic container component

 Defaults: flex: 1, flexDirection: 'column', zIndex: 0
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  marBottom,
  marCross,
  marLeft,
  marMain,
  marRight,
  marTop,
  margin,
  padBottom,
  padCross,
  padLeft,
  padMain,
  padRight,
  padTop,
  padding,
  align,
  justify,
  width,
  height,
  alignSelf,
  zIndex,
  flexDirection,
  style,
  flex,
  minHeight,
  minWidth,
  color,
  borderRadius,
}) => {
  return (
    <View
      children={children}
      style={[
        {
          flex: flex ?? 1,
          flexDirection: flexDirection ?? "column",
          alignItems: align,
          alignSelf: alignSelf,
          justifyContent: justify,
          padding: normalize(padding),
          paddingLeft: normalize(padLeft),
          paddingRight: normalize(padRight),
          paddingTop: normalize(padTop),
          paddingBottom: normalize(padBottom),
          marginLeft: normalize(marLeft),
          marginRight: normalize(marRight),
          marginTop: normalize(marTop),
          marginBottom: normalize(marBottom),
          marginHorizontal: normalize(marMain),
          marginVertical: normalize(marCross),
          paddingHorizontal: normalize(padMain),
          paddingVertical: normalize(padCross),
          margin: normalize(margin),
          width: normalize(width),
          height: normalize(height),
          borderRadius: normalize(borderRadius),
          minHeight,
          minWidth,
          zIndex: zIndex ?? 0,
          backgroundColor: color,
        },
        style,
      ]}
    />
  )
}

export default Container
