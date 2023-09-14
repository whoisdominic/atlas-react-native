import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { increment } from "../../state/features/counterSlice";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../navigation/types";
import { useGuard } from "../../hooks/guards/useGuard";

type ProviderValue = ReturnType<typeof useInteractor>;

const LandingContext = createContext<ProviderValue>({} as ProviderValue);

export function ProvideLandingInteractor({
  children,
}: {
  children: React.ReactNode;
}) {
  const provider = useInteractor();
  return (
    <LandingContext.Provider value={provider}>
      {children}
    </LandingContext.Provider>
  );
}

export const useLandingInteractor = () => {
  return useContext(LandingContext);
};

function useInteractor() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const navigation = useNavigation();

  useGuard({
    action: () => {
      navigation.navigate(Routes.FALLBACK);
    },
    refireOnFocus: false,
    condition: count > 5,
    disabled: false,
  });

  useGuard({
    action: () => {
      navigation.navigate(Routes.DETAILS, {
        id: count,
      });
    },
    refireOnFocus: true,
    condition: count >= 20,
    disabled: false,
  });

  const handleIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  return { count, handleIncrement };
}
