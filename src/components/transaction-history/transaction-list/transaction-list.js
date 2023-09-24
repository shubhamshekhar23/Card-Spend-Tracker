import styles from "../transaction-history.module.scss";
import { TransactionItem } from "../transaction-item/transaction-item";

import PropTypes from "prop-types";

TransactionList.propTypes = {
  data: PropTypes.array,
  isAnimate: PropTypes.bool,
};

export function TransactionList({ data = [], isAnimate = false }) {
  function getList() {
    return data.map((item) => {
      return (
        <div
          key={item.id}
          className={isAnimate ? styles.transaction_section_animate : null}
        >
          <TransactionItem data={item} />
        </div>
      );
    });
  }
  return <>{getList()}</>;
}
