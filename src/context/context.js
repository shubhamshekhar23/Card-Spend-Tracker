import { createContext, useState } from "react";

export const Cards_data = createContext(null);

export default function Context({ children }) {
  const [cardsData, setCardsData] = useState([]);

  return (
    <Cards_data.Provider value={{ cardsData, setCardsData }}>
      {children}
    </Cards_data.Provider>
  );
}
