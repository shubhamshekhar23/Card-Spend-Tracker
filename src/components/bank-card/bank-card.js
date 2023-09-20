import styles from "./bank-card.module.scss";
import { useState } from "react";
import Image from "next/image";
import mastercard from "../../assets/mastercard.svg";
import contactless from "../../assets/contactless.svg";

export default function BankCard(props) {
  const data = {
    id: 1,
    cardTitle: "Salary Card",
    balance: 2748,
    info: {
      abbv: "CB",
      bankName: "Universal Bank",
      number: "5489 7452 5726 9827",
      expiry: "04/24",
      type: "mastercard",
    },
  };

  function getClassNamesForCard() {
    let classNames = [styles.card];
    if (props.isVertical) {
      classNames.push(styles.card_vertical);
    } else {
      classNames.push(styles.card_horizontal);
    }
    return classNames.join(" ");
  }

  return (
    // <main className={styles.main}>
    <div className={getClassNamesForCard()} onClick={props.onClick}>
      {/* title */}
      <div className={styles.card_heading_section}>
        <span className={styles.card_abbv}>{data.info.abbv}</span>
        <span className={styles.card_separator}> | </span>
        <span className={styles.card_bank_name}> {data.info.bankName} </span>
      </div>

      {/* symbol */}
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

      {/* card number */}
      <div className={styles.card_number}>{data.info.number}</div>

      {/* footer */}
      <div className={styles.card_footer}>
        <span className={styles.card_bank_name}>{data.info.expiry}</span>
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
    </div>
    // </main>
  );
}
