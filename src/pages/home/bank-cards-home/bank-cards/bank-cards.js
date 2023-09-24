import styles from "../bank-cards-home.module.scss";
import BankCard from "@/components/bank-card/bank-card";

import PropTypes from "prop-types";

BankCards.propTypes = {
  cards: PropTypes.array,
  routerPush: PropTypes.func,
};

/* internal compoennts */
export function BankCards({ cards = [], routerPush = () => {} }) {
  return (
    <div className={styles.card_container}>
      {cards.map((item) => (
        <div key={item.id} className={styles.bank_card_item}>
          <BankCard
            onClick={() =>
              routerPush({
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
