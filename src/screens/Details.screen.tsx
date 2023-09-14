import { Text } from "react-native";
import React from "react";
import { Screen } from "../components";
import { useRoute } from "@react-navigation/native";
import { RootStackParamList, Routes } from "../navigation/types";

import type { RouteProp } from "@react-navigation/native";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, Routes.DETAILS>;

export function DetailsScreen() {
  const {
    params: { id },
  } = useRoute<DetailsScreenRouteProp>();

  return (
    <Screen align="center" justify="center">
      <Text>Details</Text>
      <Text>ID: {id}</Text>
    </Screen>
  );
}
