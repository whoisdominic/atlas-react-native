import { theme } from "@constants"
import { useTheme } from "@hooks"
import { TextProps, Text } from "react-native"

export const ThemedText: React.FC<TextProps> = (props) => {
  const { style, ...otherProps } = props
  const { mode } = useTheme()

  return <Text style={[{ color: theme[mode].text }, style]} {...otherProps} />
}
