import { useContext } from "react";

import { TotalContext } from "../contexts/TotalContext";

export function useTotal() {
  const context = useContext(TotalContext);
  if (!context) {
    throw new Error("useTotal must be used within a Provider");
  }
  return context;
}
