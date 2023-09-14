import { useCallback } from "react";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";

import { usePreLaunch } from "./src/hooks";
import { RootNavigation } from "./src/navigation/RootNavigation";
import { FallBackScreen } from "./src/screens";
import { store } from "./src/state/store";

export default function App() {
  const { appIsReady, preLaunchData } = usePreLaunch();

  // Configure store with preLaunchData
  store.dispatch({ type: "SET_PRE_LAUNCH_DATA", payload: preLaunchData });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return <FallBackScreen />;

  return (
    <Provider store={store}>
      <RootNavigation onLayout={onLayoutRootView} />
    </Provider>
  );
}
