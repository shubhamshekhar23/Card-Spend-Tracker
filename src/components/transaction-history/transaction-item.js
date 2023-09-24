import styles from "./transaction-history.module.scss";
import { formattedAmount } from "@/services/util.service";
import { TransactionTypeButton } from "./transaction-type-button";

export function TransactionItem({ data }) {
  function getFormatAmount(amount, info) {
    let str = formattedAmount(amount);
    if (info == "debit") {
      return "- " + str;
    }
    return str;
  }

  return (
    <div className={styles.transaction_section}>
      <TransactionTypeButton type={data.type} />
      <div className={styles.details_amount}>
        <div className={styles.transaction__description}>
          <h3>{data.name}</h3>
          <h4>{data.details}</h4>
        </div>
        <h3>{getFormatAmount(data.amount, data.info)}</h3>
      </div>
    </div>
  );
}
