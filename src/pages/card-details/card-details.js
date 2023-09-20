import styles from "./card-details.module.scss";
import { useState, useEffect } from "react";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { useRouter } from "next/router";
import BankCard from "@/components/bank-card/bank-card";
import { useContext } from "react";
import { Cards_data } from "@/context/context";

export default function CardDetails() {
  const { cardsData, setCardsData } = useContext(Cards_data);
  const [card, setCard] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const id = router.query.id;
    let item = cardsData.find((item) => item.id == id);
    setCard(item);
  }, [router.isReady]);

  return (
    <main className={styles.main}>
      <UilArrowLeft color="white" onClick={() => router.back()} />
      <h1>I am card details</h1>
      <BankCard className={styles.bank_card} data={card} />
    </main>
  );
}
