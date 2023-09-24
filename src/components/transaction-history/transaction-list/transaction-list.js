import styles from "../transaction-history.module.scss";
import { TransactionItem } from "../transaction-item/transaction-item";

export function TransactionList({ data, isAnimate }) {
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
