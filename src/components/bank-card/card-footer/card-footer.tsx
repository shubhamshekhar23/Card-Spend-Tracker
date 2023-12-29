import mastercard from "../../../assets/mastercard.svg";
import styles from "../bank-card.module.scss";

type CardFooterPropTypes = {
  data?: any;
};

export default function CardFooter({ data = {} }: CardFooterPropTypes) {
  return (
    <div className={styles.card_footer}>
      <span className={styles.card_bank_name}>{data?.info?.expiry}</span>
      <div>
        <img
          // priority
          className={styles.card_logo}
          src={mastercard}
          alt="mastercard logo"
          height={40}
        />
        <p>mastercard</p>
      </div>
    </div>
  );
}
