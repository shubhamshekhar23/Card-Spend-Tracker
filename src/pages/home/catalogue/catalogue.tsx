import { useEffect,useState } from "react";

import UserImage from "@/components/user-image/user-image";
import { getDebtCatalogue } from "@/services/card-api.service";

import styles from "./catalogue.module.scss";
import { CatalogueList } from "./catalogue-list/catalogue-list";

export default function Catalogue() {
  const [catalogueData, setCatalogueData]: any = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getDebtCatalogue();
      setCatalogueData(response);
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
