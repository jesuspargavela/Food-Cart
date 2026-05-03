import { createContext, useState } from "react";

type SelectedMapContextType = {
  selectedMap: Record<string, boolean>;
  setSelectedMap: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
};

const SelectedMapContext = createContext<SelectedMapContextType | null>(null);

type SelectedMapType = {
  children: React.ReactNode;
};

function SelectedMapProvider({ children }: SelectedMapType) {
  const [selectedMap, setSelectedMap] = useState<Record<string, boolean>>({});

  return (
    <SelectedMapContext.Provider value={{ selectedMap, setSelectedMap }}>
      {children}
    </SelectedMapContext.Provider>
  );
}

export { SelectedMapContext, SelectedMapProvider };
