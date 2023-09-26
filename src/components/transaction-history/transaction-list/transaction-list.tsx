import styles from "../transaction-history.module.scss";
import { TransactionItem } from "../transaction-item/transaction-item";

type TransactionListPropTypes = {
  data: Array<any>;
  isAnimate: Boolean;
};

export function TransactionList({
  data = [],
  isAnimate = false,
}: TransactionListPropTypes) {
  function getList() {
    return data.map((item) => {
      return (
        <div
          key={item.id}
          className={isAnimate ? styles.transaction_section_animate : ""}
        >
          <TransactionItem data={item} />
        </div>
      );
    });
  }
  return <>{getList()}</>;
}
