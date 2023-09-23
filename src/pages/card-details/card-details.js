import styles from "./card-details.module.scss";
import { useState, useEffect } from "react";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { useRouter } from "next/router";
import BankCard from "@/components/bank-card/bank-card";
import TransactionHistory from "@/components/transaction-history/transaction-history";
import SquareButton from "@/ui/square-button/square-button";
import { UilShare, UilHistory } from "@iconscout/react-unicons";
import {
  classForSliderPanel,
  classForTitle,
  classForBalanceShareSection,
} from "./class-provider.service";
import { formattedAmount } from "@/services/util.service";
import useCardDetails from "./useCardDetails.hook";

export default function CardDetails() {
  const [sliderPosition, setSliderPosition] = useState(-1); // can hahve 0,1,2
  const { historyData, card } = useCardDetails();
  const router = useRouter();

  function sliderButtonClick() {
    if (sliderPosition == -1) setSliderPosition(1);
    else if (sliderPosition == 2) setSliderPosition(0);
    else setSliderPosition(sliderPosition + 1);
  }

  return (
    <main className={`${styles.main} ${styles.smoothly_appear}`}>
      {/* header section */}
      <CardDetailsTitle
        sliderPosition={sliderPosition}
        back={router.back}
      ></CardDetailsTitle>

      {/* title */}
      <h1 className={classForTitle(sliderPosition)}>Salary Card</h1>

      {/* balance share section */}
      <div className={classForBalanceShareSection(sliderPosition)}>
        <BankCard className={styles.bank_card} data={card} />
        <BalanceShareSection card={card} />
      </div>

      {/* history panel */}
      <HistoryPanel
        historyData={historyData}
        sliderPosition={sliderPosition}
        sliderButtonClick={sliderButtonClick}
      ></HistoryPanel>
    </main>
  );
}

function BalanceShareSection({ card }) {
  return (
    <div className={styles.balance_share}>
      <div>
        <h5>Balance</h5>
        <h2>{formattedAmount(card?.balance || 0)}</h2>
      </div>
      <div className={styles.btn_group}>
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

function CardDetailsTitle(props) {
  return (
    <div className={styles.header}>
      <span>
        <UilArrowLeft
          color="white"
          onClick={() => props.back()}
          height={40}
          width={40}
        />
      </span>
      <h3 className={classForTitle(props.sliderPosition)}>Salary Card</h3>
    </div>
  );
}

function HistoryPanel(props) {
  return (
    <div
      className={classForSliderPanel(props.sliderPosition)}
      onClick={props.sliderButtonClick}
    >
      <div className={styles.slider_btn}>
        <button className={styles.nav_btn}></button>
      </div>
      <TransactionHistory data={props.historyData} />
    </div>
  );
}
