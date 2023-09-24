import styles from "./transaction-history.module.scss";
import { TransactionByDate } from "./transaction-by-date/transaction-by-date";

import PropTypes from "prop-types";

TransactionHistory.propTypes = {
  data: PropTypes.object,
  isAnimate: PropTypes.bool,
};

export default function TransactionHistory({ data, isAnimate }) {
  return (
    <main className={styles.main}>
      <TransactionByDate data={data} isAnimate={isAnimate} />
    </main>
  );
}
