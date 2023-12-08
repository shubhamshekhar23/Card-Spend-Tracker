import { createContext, useContext, useState } from "react";

export const GlobalContext: any = createContext(null);

export default function GlobalContextProvider({ children }: any) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext: any = () => {
  return useContext(GlobalContext);
};
