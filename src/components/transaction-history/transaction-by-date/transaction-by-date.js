import styles from "../transaction-history.module.scss";
import { TransactionList } from "../transaction-list/transaction-list";

import PropTypes from "prop-types";

TransactionByDate.propTypes = {
  data: PropTypes.object,
  isAnimate: PropTypes.bool,
};

export function TransactionByDate({ data = {}, isAnimate = false }) {
  return (
    <>
      {Object.keys(data).map((item, index) => {
        return (
          <div key={index}>
            <h2 className={styles.date_title}>{item}</h2>
            <TransactionList data={data[item]} isAnimate={isAnimate} />
          </div>
        );
      })}
    </>
  );
}
