import styles from "./card-details.module.scss";
import { useState, useEffect } from "react";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { useRouter } from "next/navigation";
import { getTransactionHistory } from "@/services/card-api.service";
import BankCard from "@/components/bank-card/bank-card";

export default function Home() {
  const router = useRouter();
  // const { id } = router.query;

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getTransactionHistory();
  //     setCards(response);
  //   }
  //   fetchData();
  // }, []);

  return (
    <main className={styles.main}>
      <UilArrowLeft color="white" onClick={() => router.back()} />
      <h1>I am card details</h1>
      <BankCard className={styles.bank_card} />
    </main>
  );
}
