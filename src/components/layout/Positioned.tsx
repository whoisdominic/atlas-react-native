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
  position?: ViewStyle["position"]
  top?: number
  bottom?: number
  left?: number
  right?: number
}

/**
 Basic container component

 Defaults: position: absolute, flex: 0, zIndex: 0, flexDirection: 'column'
 */
export const Positioned: React.FC<ContainerProps> = ({
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
  position,
  top,
  bottom,
  left,
  right,
}) => {
  return (
    <View
      children={children}
      style={[
        {
          position: position ?? "absolute",
          top,
          bottom,
          left,
          right,
          flex: flex ?? 0,
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
        },
        style,
      ]}
    />
  )
}

export default Positioned
