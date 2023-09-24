import styles from "./bank-card.module.scss";
import Image from "next/image";
import mastercard from "../../assets/mastercard.svg";

/* internal components */
export function CardFooter(props) {
  return (
    <div className={styles.card_footer}>
      <span className={styles.card_bank_name}>{props.data?.info?.expiry}</span>
      <div>
        <Image
          priority
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
