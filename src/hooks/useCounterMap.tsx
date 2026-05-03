import { useContext } from "react";

import { CounterMapContext } from "../contexts/CounterMapContext";

export function useCounterMap() {
  const context = useContext(CounterMapContext);
  if (!context) {
    throw new Error("useCounterMap must be used within a Provider");
  }
  return context;
}