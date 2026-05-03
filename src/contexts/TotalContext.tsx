import { createContext, useState } from "react";

type TotalContextType = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const TotalContext = createContext<TotalContextType | null>(null);

type TotalType = {
  children: React.ReactNode;
};

function TotalProvider({ children }: TotalType) {
  const [total, setTotal] = useState<number>(0);

  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
}

export { TotalContext, TotalProvider };
