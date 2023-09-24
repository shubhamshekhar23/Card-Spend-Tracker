import styles from "../card-details.module.scss";
import TransactionHistory from "@/components/transaction-history/transaction-history";
import { classForSliderPanel } from "../class-provider.service";
import PropTypes from "prop-types";

HistoryPanel.propTypes = {
  historyData: PropTypes.object,
  sliderPosition: PropTypes.number,
  sliderButtonClick: PropTypes.func,
};

export function HistoryPanel({
  historyData = {},
  sliderPosition = 0,
  sliderButtonClick = () => {},
}) {
  return (
    <div
      className={classForSliderPanel(sliderPosition)}
      onClick={sliderButtonClick}
    >
      <div className={styles.slider_btn}>
        <button className={styles.nav_btn}></button>
      </div>
      <TransactionHistory data={historyData} />
    </div>
  );
}
