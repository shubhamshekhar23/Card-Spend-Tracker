import styles from "../bank-card.module.scss";

export function CardTitle(props) {
  return (
    <div className={styles.card_heading_section}>
      <span className={styles.card_abbv}>{props.data?.info?.abbv}</span>
      <span className={styles.card_separator}> | </span>
      <span className={styles.card_bank_name}>
        {" "}
        {props.data?.info?.bankName}{" "}
      </span>
    </div>
  );
}
