import { createContext, useState } from "react";

type CounterMapContextType = {
  counterMap: Record<string, number>;
  setCounterMap: React.Dispatch<React.SetStateAction<Record<string, number>>>;
};

const CounterMapContext = createContext<CounterMapContextType | null>(null);

type CounterMapType = {
  children: React.ReactNode;
};

function CounterMapProvider({ children }: CounterMapType) {
  const [counterMap, setCounterMap] = useState<Record<string, number>>({});

  return (
    <CounterMapContext.Provider value={{ counterMap, setCounterMap }}>
      {children}
    </CounterMapContext.Provider>
  );
}

export { CounterMapContext, CounterMapProvider };
