import { useContext } from "react";

import { SelectedItemsContext } from "../contexts/SelectedItemsContext";

export function useSelectedItems() {
  const context = useContext(SelectedItemsContext);
  if (!context) {
    throw new Error("useSelectedItems must be used within a Provider");
  }
  return context;
}
