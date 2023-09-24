import styles from "./card-details.module.scss";
import TransactionHistory from "@/components/transaction-history/transaction-history";
import { classForSliderPanel } from "./class-provider.service";

export function HistoryPanel(props) {
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
