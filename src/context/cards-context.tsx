import { createContext, useContext, useState } from "react";

export const CardsContext: any = createContext(null);

export default function CardsContextProvider({ children }: any) {
  const [cardsData, setCardsData] = useState([]);

  return (
    <CardsContext.Provider value={{ cardsData, setCardsData }}>
      {children}
    </CardsContext.Provider>
  );
}

export const useCardsContext: any = () => {
  return useContext(CardsContext);
};
