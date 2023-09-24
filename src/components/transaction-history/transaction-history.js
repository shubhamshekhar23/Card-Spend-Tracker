import styles from "./transaction-history.module.scss";
import { TransactionByDate } from "./transaction-by-date";

export default function TransactionHistory({ data, isAnimate }) {
  return (
    <main className={styles.main}>
      <TransactionByDate data={data} isAnimate={isAnimate} />
    </main>
  );
}
