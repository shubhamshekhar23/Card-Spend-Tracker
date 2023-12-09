import styles from "../bank-card.module.scss";

type CardTitlePropTypes = {
  data: any;
};

export default function CardTitle({ data = {} }: CardTitlePropTypes) {
  return (
    <div className={styles.card_heading_section}>
      <span className={styles.card_abbv}>{data?.info?.abbv}</span>
      <span className={styles.card_separator}> | </span>
      <span className={styles.card_bank_name}> {data?.info?.bankName} </span>
    </div>
  );
}
