import styles from "./bank-cards-home.module.scss";
import BankCard from "@/components/bank-card/bank-card";

/* internal compoennts */
export function BankCards(props) {
  return (
    <div className={styles.card_container}>
      {props.cards.map((item) => (
        <div key={item.id} className={styles.bank_card_item}>
          <BankCard
            onClick={() =>
              props.routerPush({
                pathname: "/card-details",
                query: {
                  id: item.id,
                },
              })
            }
            className={styles.bank_card}
            data={item}
            isVertical={true}
          />
        </div>
      ))}
    </div>
  );
}
