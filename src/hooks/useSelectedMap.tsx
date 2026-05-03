import { useContext } from "react";

import { SelectedMapContext } from "../contexts/SelectedMapContext";

export function useSelectedMap() {
  const context = useContext(SelectedMapContext);
  if (!context) {
    throw new Error("useSelectedMap must be used within a Provider");
  }
  return context;
}