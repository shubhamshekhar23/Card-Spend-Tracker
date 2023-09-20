import styles from "./bank-cards-home.module.scss";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import BankCard from "@/components/bank-card/bank-card";
import { getCardsOfUser } from "@/services/card-api.service";

export default function BankCardsHome() {
  let [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getCardsOfUser();
      setCards(response);
    }
    fetchData();
  }, []);

  function getAmount() {
    let amount = 0;
    cards.forEach((item) => {
      amount += item.balance;
    });
    return amount;
  }

  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>Bank Cards</h1>
      <h5>Balance</h5>
      <h2>{getAmount()}</h2>
      <div className={styles.card_container}>
        {cards.map((item) => (
          <BankCard
            key={item.id}
            onClick={() => router.push("/card-details")}
            className={styles.bank_card}
            data={item}
            isVertical={true}
          />
        ))}
      </div>
      <div></div>
    </main>
  );
}
