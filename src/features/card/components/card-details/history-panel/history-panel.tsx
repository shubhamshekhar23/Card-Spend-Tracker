import TransactionHistory from "@/components/transaction-history/transaction-history";

import styles from "../card-details.module.scss";
import { classForSliderPanel } from "../class-provider.service";

type HistoryPanelPropTypes = {
  historyData: any;
  sliderPosition: Number;
  sliderButtonClick: () => void;
};

export function HistoryPanel({
  historyData = {},
  sliderPosition = 0,
  sliderButtonClick = () => {},
}: HistoryPanelPropTypes) {
  return (
    <div
      className={classForSliderPanel(sliderPosition)}
      onClick={sliderButtonClick}
    >
      <div className={styles.slider_btn}>
        <button className={styles.nav_btn}></button>
      </div>
      <TransactionHistory data={historyData} />
      <div style={{ height: "50px" }}></div>
    </div>
  );
}
