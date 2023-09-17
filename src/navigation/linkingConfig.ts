import { LinkingOptions } from "@react-navigation/native"
import { RootStackParamList, initialRoute } from "./types"
import * as Linking from "expo-linking"

const prefix = Linking.createURL("/")

export const linkingConfig: LinkingOptions<RootStackParamList> = {
  prefixes: ["atlas://", prefix],
  config: {
    screens: {
      Landing: "",
      Details: { path: "details/:id", parse: { id: Number } },
      NotFound: "*",
    },
  },
}
