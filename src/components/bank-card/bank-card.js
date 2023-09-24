import styles from "./bank-card.module.scss";
import { useState } from "react";
import Image from "next/image";
import mastercard from "../../assets/mastercard.svg";
import contactless from "../../assets/contactless.svg";
import { getClassNamesForCard } from "./class-provider-service";

export default function BankCard(props) {
  const [isBackView, setIsBackView] = useState(false); // can hahve 0,1,2
  const data = props.data;

  function handleMouseUp() {
    if (!props.isBackPreview) return;
    setIsBackView(false);
    document.removeEventListener("pointerup", handleMouseUp);
  }

  function handleMouseDown() {
    if (!props.isBackPreview) return;
    setIsBackView(true);
    document.addEventListener("pointerup", handleMouseUp);
  }

  function correctViewOfCard() {
    if (props.isBackPreview && isBackView) {
      return (
        <CardBackView data={data} onPointerUp={handleMouseUp}></CardBackView>
      );
    }
    return (
      <CardFrontView
        data={data}
        onPointerDown={handleMouseDown}
      ></CardFrontView>
    );
  }

  return (
    <div
      className={`${props.className} ${getClassNamesForCard(
        props,
        isBackView
      )}`}
      onClick={props.onClick}
      id={`card-${data?.id}`}
    >
      {correctViewOfCard()}
    </div>
  );
}

function CardFrontView({ data, onPointerUp, onPointerDown }) {
  return (
    <div className={styles.card_front} onPointerDown={onPointerDown}>
      <CardTitle data={data}></CardTitle>
      <CardSymbol></CardSymbol>
      <div className={styles.card_number}>{data?.info?.number}</div>
      <CardFooter data={data}></CardFooter>
    </div>
  );
}

function CardBackView({ onPointerUp }) {
  return (
    <div onPointerUp={onPointerUp}>
      {/* strip */}
      <div className={styles.strip}></div>
      <div className={styles.cvv_section}>
        <span>633</span>
      </div>
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
