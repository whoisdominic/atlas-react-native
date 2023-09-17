import { View } from "react-native"
import React from "react"
import { normalize } from "@utils"

interface Props {
  all?: number
  left?: number
  right?: number
  top?: number
  bottom?: number
  vert?: number
  horz?: number
}

export const Spacer: React.FC<Props> = ({
  all,
  left,
  right,
  bottom,
  vert,
  horz,
  top,
}) => {
  return (
    <View
      style={{
        margin: normalize(all),
        marginBottom: normalize(bottom),
        marginTop: normalize(top),
        marginRight: normalize(right),
        marginLeft: normalize(left),
        marginHorizontal: normalize(horz),
        marginVertical: normalize(vert),
      }}
    />
  )
}

export default Spacer
