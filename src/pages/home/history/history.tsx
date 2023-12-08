import { useEffect, useState } from "react";

import TransactionHistory from "@/components/transaction-history/transaction-history";
import UserImage from "@/components/user-image/user-image";
import { getTransactionHistory } from "@/services/card-api.service.ts";
import { arrangeHistoryByDate } from "@/services/util.service.ts";
import { AddTransactionButton } from "@/components/add-transaction-button/add-transaction-button";

import styles from "./history.module.scss";

export default function History() {
  const [historyData, setHistoryData]: any = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getTransactionHistory();
      let mapData = arrangeHistoryByDate(response);
      setHistoryData(mapData);
    }
    fetchData();
  }, []);

  return (
    <main className={styles.smoothly_appear}>
      <div className={styles.screen_title}>
        <h1>History</h1>
        <UserImage />
      </div>
      <TransactionHistory data={historyData} isAnimate={true} />
      <AddTransactionButton />
    </main>
  );
}
