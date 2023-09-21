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
  let [sliderPosition, setSliderPosition] = useState(0); // can hahve 0,1,2

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

  function sliderButtonClick() {
    if (sliderPosition == 2) setSliderPosition(0);
    else setSliderPosition(sliderPosition + 1);
  }

  function classForSliderPanel() {
    let classNames = [styles.slider_panel];

    if (sliderPosition == 1) {
      classNames.push(styles.slider_panel_level_one);
    }
    if (sliderPosition == 2) {
      classNames.push(styles.slider_panel_level_two);
    }
    return classNames.join(" ");
  }

  function classForTitle() {
    if (sliderPosition !== 0) return styles.title_complete_slider;
    return "";
  }

  return (
    <main className={styles.main}>
      <UilArrowLeft
        color="white"
        onClick={() => router.back()}
        height={40}
        width={40}
      />
      <h1 className={classForTitle()}>Salary Card</h1>
      <BankCard className={styles.bank_card} data={card} />

      {/* balance share section */}
      <BalanceShareSection card={card} />

      {/* history panel */}
      <div className={classForSliderPanel()}>
        <div className={styles.slider_btn}>
          <button
            className={styles.nav_btn}
            onClick={sliderButtonClick}
          ></button>
        </div>
        <TransactionHistory data={historyData} />
      </div>
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
