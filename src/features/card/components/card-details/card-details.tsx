import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import BankCard from "@/components/bank-card/bank-card";

import BalanceShareSection from "./balance-share-section/balance-share-section";
import styles from "./card-details.module.scss";
import CardDetailsTitle from "./card-details-title/card-details-title";
import {
  classForBalanceShareSection,
  classForTitle,
} from "./class-provider.service";
import HistoryPanel from "./history-panel/history-panel";
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
        <div className={styles.card_container}>
          <BankCard
            className={styles.bank_card}
            data={card}
            isBackPreview={true}
          />
        </div>
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
