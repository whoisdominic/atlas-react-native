import * as Linking from "expo-linking"
import { LinkingOptions } from "@react-navigation/native"
import { RootStackParamList, initialRoute } from "./types"

const prefix = Linking.createURL("/")

export const linkingConfig: LinkingOptions<RootStackParamList> = {
  prefixes: [prefix],
  config: {
    screens: {
      Landing: "/",
      Details: "details/:id",
      NotFound: "*",
    },
    initialRouteName: initialRoute,
  },
}
