import { createContext, useState } from "react";

import type { Dessert } from "../models/Dessert";

type SelectedItemsContextType = {
  selectedItems: Dessert[];
  setSelectedItems: React.Dispatch<React.SetStateAction<Dessert[]>>;
};

const SelectedItemsContext = createContext<SelectedItemsContextType | null>(
  null,
);

type SelectedItemsType = {
  children: React.ReactNode;
};

function SelectedItemsProvider({ children }: SelectedItemsType) {
  const [selectedItems, setSelectedItems] = useState<Dessert[]>([]);

  return (
    <SelectedItemsContext.Provider value={{ selectedItems, setSelectedItems }}>
      {children}
    </SelectedItemsContext.Provider>
  );
}

export { SelectedItemsContext, SelectedItemsProvider };
