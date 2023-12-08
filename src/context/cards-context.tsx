import { createContext, useContext, useState } from "react";

export const CardsContext: any = createContext(null);

export default function CardsContextProvider({ children }: any) {
  const [cardsData, setCardsData] = useState([]);
  const [manualBalance, setManualBalance] = useState(0);

  return (
    <CardsContext.Provider
      value={{ cardsData, setCardsData, manualBalance, setManualBalance }}
    >
      {children}
    </CardsContext.Provider>
  );
}

export const useCardsContext: any = () => {
  return useContext(CardsContext);
};
