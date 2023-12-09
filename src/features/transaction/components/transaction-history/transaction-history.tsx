import TransactionByDate from "./transaction-by-date/transaction-by-date";
import styles from "./transaction-history.module.scss";

type TransactionHistoryPropTypes = {
  data: any;
  isAnimate?: Boolean;
};

export default function TransactionHistory({
  data,
  isAnimate = false,
}: TransactionHistoryPropTypes) {
  return (
    <main className={styles.main}>
      <TransactionByDate data={data} isAnimate={isAnimate} />
    </main>
  );
}
