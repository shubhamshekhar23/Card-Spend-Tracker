import styles from "./history.module.scss";
import { useState, useEffect } from "react";
import { getTransactionHistory } from "@/services/card-api.service";
import { arrangeHistoryByDate } from "@/services/util.service";
import TransactionHistory from "@/components/transaction-history/transaction-history";
import UserImage from "@/components/user-image/user-image";

export default function History() {
  const [historyData, setHistoryData] = useState({});

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
    </main>
  );
}
