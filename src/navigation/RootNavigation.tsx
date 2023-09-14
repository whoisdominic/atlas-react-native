import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, Routes, initialRoute } from "./types";
import { noHeaderStack } from "./options";
import {
  FallBackScreen,
  LandingScreen,
  DetailsScreen,
  NotFoundScreen,
} from "../screens";
import { navigationRef } from "./navigationRef";
import { linkingConfig } from "./linkingConfig";

const RootStack = createNativeStackNavigator<RootStackParamList>();

interface Props {
  onLayout: () => Promise<void>;
}

export function RootNavigation({ onLayout }: Props) {
  return (
    <NavigationContainer
      onReady={onLayout}
      ref={navigationRef}
      fallback={<FallBackScreen />}
      linking={linkingConfig}
    >
      <RootStack.Navigator
        screenOptions={noHeaderStack}
        initialRouteName={initialRoute}
      >
        <RootStack.Screen name={Routes.LANDING} component={LandingScreen} />
        <RootStack.Screen name={Routes.DETAILS} component={DetailsScreen} />
        <RootStack.Screen name={Routes.FALLBACK} component={FallBackScreen} />
        <RootStack.Screen name={Routes.NOTFOUND} component={NotFoundScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
