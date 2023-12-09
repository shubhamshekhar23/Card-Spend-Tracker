import { useContext, useEffect, useState } from "react";

import UserImage from "@/components/user-image/user-image";
import { getDebtCatalogue } from "@/services/card-api.service.ts";
import { useCatalogueContext } from "@/context/catalogue.context";

import styles from "./catalogue.module.scss";
import { CatalogueList } from "./catalogue-list/catalogue-list";
import { useGlobalContext } from "@/context/global-context";

export default function Catalogue() {
  const { catalogueData, setCatalogueData }: any = useCatalogueContext();
  const { isLoading, setIsLoading }: any = useGlobalContext();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getDebtCatalogue();
      setCatalogueData(response);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <main className={styles.smoothly_appear}>
      <div className={styles.catalogue_container}>
        <div className={styles.screen_title}>
          <h1>Catalogue</h1>
          <UserImage />
        </div>
        <CatalogueList data={catalogueData} />
      </div>
    </main>
  );
}
