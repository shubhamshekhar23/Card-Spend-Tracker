import Image from "next/image";

import contactless from "../../../assets/contactless.svg";
import styles from "../bank-card.module.scss";

export default function CardSymbol() {
  return (
    <div className={styles.card_symbol_section}>
      <span className={styles.card_square}></span>
      <Image
        priority
        className={styles.card_logo}
        src={contactless}
        alt="contactless payment"
        height={40}
      />
    </div>
  );
}
