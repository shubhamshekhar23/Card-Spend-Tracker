import { useContext, useEffect, useState } from "react";

import TransactionHistory from "@/components/transaction-history/transaction-history";
import UserImage from "@/components/user-image/user-image";
import { getTransactionHistory } from "@/services/card-api.service.ts";
import { arrangeHistoryByDate } from "@/services/util.service.ts";
import { AddTransactionButton } from "@/components/add-transaction-button/add-transaction-button";
import { useTransactionHistoryContext } from "@/context/transaction-history";

import styles from "./history.module.scss";

export default function History() {
  const { transactionHistoryData, setTransactionHistoryData }: any =
    useTransactionHistoryContext();

  useEffect(() => {
    async function fetchData() {
      const response = await getTransactionHistory();
      let mapData = arrangeHistoryByDate(response);
      setTransactionHistoryData(mapData);
    }
    fetchData();
  }, []);

  return (
    <main className={styles.smoothly_appear}>
      <div className={styles.screen_title}>
        <h1>History</h1>
        <UserImage />
      </div>
      <TransactionHistory data={transactionHistoryData} isAnimate={true} />
      <AddTransactionButton />
    </main>
  );
}
