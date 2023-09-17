import { View, FlexStyle, ColorValue, ViewStyle } from "react-native"
import React from "react"
import { StandardPositions } from "../StandardPositions"
import { normalize } from "@utils"

interface RowProps extends StandardPositions {
  align?: FlexStyle["alignItems"]
  alignSelf?: FlexStyle["alignItems"]
  justify?: FlexStyle["justifyContent"]
  width?: number
  height?: number
  zIndex?: number
  children?: React.ReactNode
  color?: ColorValue
  overide?: ViewStyle
  testID?: string
}

/**
 Basic row component
 */
export const Row: React.FC<RowProps> = ({
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
  color,
  overide,
  testID,
}) => {
  return (
    <View
      testID={testID}
      children={children}
      style={[
        {
          backgroundColor: color,
          flexDirection: "row",
          alignItems: align ?? "center",
          alignSelf: alignSelf ?? undefined,
          justifyContent: justify ?? undefined,
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
          zIndex: zIndex ?? 0,
        },
        overide,
      ]}
    />
  )
}

export default Row
