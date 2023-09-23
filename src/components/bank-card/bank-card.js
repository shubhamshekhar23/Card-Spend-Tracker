import styles from "./bank-card.module.scss";
import { useState } from "react";
import Image from "next/image";
import mastercard from "../../assets/mastercard.svg";
import contactless from "../../assets/contactless.svg";

export default function BankCard(props) {
  const data = props.data;

  function getClassNamesForCard() {
    let classNames = [styles.card];
    if (data?.info?.type == "mastercard") {
      classNames.push(styles.card_mastercard_gradient_color);
    } else {
      classNames.push(styles.card_visa_gradient_color);
    }
    if (props.isVertical) {
      classNames.push(styles.card_vertical);
    } else {
      classNames.push(styles.card_horizontal);
    }
    return classNames.join(" ");
  }

  return (
    <div
      className={`${props.className} ${getClassNamesForCard()}`}
      onClick={props.onClick}
      id={`card-${data?.id}`}
    >
      {/* title */}
      <CardTitle data={data}></CardTitle>

      {/* symbol */}
      <CardSymbol></CardSymbol>

      {/* card number */}
      <div className={styles.card_number}>{data?.info?.number}</div>

      {/* footer */}
      <CardFooter data={data}></CardFooter>
    </div>
  );
}

/* internal components */

function CardFooter(props) {
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

function CardSymbol() {
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

function CardTitle(props) {
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
