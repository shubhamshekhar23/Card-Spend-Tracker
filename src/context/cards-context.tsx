import { createContext, useState } from "react";

export const Cards_data: any = createContext(null);

export default function CardsContext({ children }: any) {
  const [cardsData, setCardsData] = useState([]);

  return (
    <Cards_data.Provider value={{ cardsData, setCardsData }}>
      {children}
    </Cards_data.Provider>
  );
}
