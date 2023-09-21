import styles from "./card-details.module.scss";
import { useState, useEffect } from "react";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { useRouter } from "next/router";
import BankCard from "@/components/bank-card/bank-card";
import { useContext } from "react";
import { Cards_data } from "@/context/context";
import {
  getTransactionHistoryOfCard,
  getCardsOfUser,
} from "@/services/card-api.service";
import { arrangeHistoryByDate } from "@/services/util.service";
import TransactionHistory from "@/components/transaction-history/transaction-history";
import SquareButton from "@/ui/square-button/square-button";
import { UilShare, UilHistory } from "@iconscout/react-unicons";

export default function CardDetails() {
  const { cardsData, setCardsData } = useContext(Cards_data);
  let [historyData, setHistoryData] = useState({});

  const [card, setCard] = useState({});
  const router = useRouter();

  async function fetchData() {
    if (!cardsData) {
      const response = await getCardsOfUser();
      setCardsData(response);
    }
    if (!router.isReady) return;
    const id = router.query.id;
    let item = cardsData.find((item) => item.id == id);
    setCard(item);
  }

  useEffect(() => {
    fetchData();
  }, [router.isReady]);

  useEffect(() => {
    async function fetchData() {
      const response = await getTransactionHistoryOfCard(card.id);
      let mapData = arrangeHistoryByDate(response);
      setHistoryData(mapData);
    }
    if (card.id) fetchData();
  }, [card]);

  return (
    <main className={styles.main}>
      <UilArrowLeft
        color="white"
        onClick={() => router.back()}
        height={40}
        width={40}
      />
      <h1>Salary Card</h1>
      <BankCard className={styles.bank_card} data={card} />
      {/* balance share section */}
      <BalanceShareSection card={card} />

      {/* history panel */}
      <TransactionHistory data={historyData} />
    </main>
  );
}

function BalanceShareSection({ card }) {
  return (
    <div className={styles.balance_share}>
      <div>
        <h4>Balance</h4>
        <h2>{card.balance}</h2>
      </div>
      <div>
        <SquareButton>
          <UilHistory color="white" />
        </SquareButton>
        <SquareButton>
          <UilShare color="white" />
        </SquareButton>
      </div>
    </div>
  );
}
