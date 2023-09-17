import * as Linking from "expo-linking"
import { LinkingOptions } from "@react-navigation/native"
import { RootStackParamList, initialRoute } from "./types"

export const linkingConfig: LinkingOptions<RootStackParamList> = {
  prefixes: ["atlas://"],
  config: {
    screens: {
      Landing: "/",
      Details: "details/:id",
      NotFound: "*",
    },
    initialRouteName: initialRoute,
  },
}
