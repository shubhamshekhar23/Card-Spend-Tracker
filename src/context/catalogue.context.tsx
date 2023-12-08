import { createContext, useState } from "react";

export const Catalogue_Data: any = createContext(null);

export default function CatalogueContext({ children }: any) {
  const [catalogueData, setCatalogueData] = useState([]);

  return (
    <Catalogue_Data.Provider value={{ catalogueData, setCatalogueData }}>
      {children}
    </Catalogue_Data.Provider>
  );
}
