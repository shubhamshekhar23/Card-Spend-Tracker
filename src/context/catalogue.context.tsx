import { createContext, useContext, useState } from "react";

export const CatalogueContext: any = createContext(null);

export default function CatalogueContextProvider({ children }: any) {
  const [catalogueData, setCatalogueData] = useState([]);

  return (
    <CatalogueContext.Provider value={{ catalogueData, setCatalogueData }}>
      {children}
    </CatalogueContext.Provider>
  );
}

export const useCatalogueContext: any = () => {
  return useContext(CatalogueContext);
};
