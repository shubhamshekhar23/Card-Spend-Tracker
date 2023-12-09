import styles from "../transaction-history.module.scss";
import TransactionList from "../transaction-list/transaction-list";

type TransactionByDatePropTypes = {
  data: any;
  isAnimate: Boolean;
};

export default function TransactionByDate({
  data = {},
  isAnimate = false,
}: TransactionByDatePropTypes) {
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
