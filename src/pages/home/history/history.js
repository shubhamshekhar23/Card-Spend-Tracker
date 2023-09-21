import styles from "./history.module.scss";
import { useState, useEffect } from "react";
import { getTransactionHistory } from "@/services/card-api.service";
import { arrangeHistoryByDate } from "@/services/util.service";
import TransactionHistory from "@/components/transaction-history/transaction-history";

/* 
  {
    transactionId: 1,
    name: "card to card",
    details: "Maria",
    amount: 100.5,
    info: "credit",
    timestamp: "2023-09-19T12:30:45Z",
    type: 0,
  }
*/

export default function History() {
  let [historyData, setHistoryData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getTransactionHistory();
      let mapData = arrangeHistoryByDate(response);
      setHistoryData(mapData);
    }
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <h1>History</h1>
      <TransactionHistory data={historyData} />
    </main>
  );
}
