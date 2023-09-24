import styles from "../bank-cards-home.module.scss";
import UserImage from "@/components/user-image/user-image";

export function BankCardsTitle({ getAmount }) {
  return (
    <div className={styles.card_title_Section}>
      <div className={styles.screen_title}>
        <h1>Bank</h1>
        <UserImage />
      </div>
      <h1>Cards</h1>
      <h5>Balance</h5>
      <h2>{getAmount()}</h2>
    </div>
  );
}
