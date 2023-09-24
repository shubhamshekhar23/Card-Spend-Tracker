import styles from "./transaction-history.module.scss";
import { TransactionList } from "./transaction-list";

export function TransactionByDate({ data, isAnimate }) {
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
