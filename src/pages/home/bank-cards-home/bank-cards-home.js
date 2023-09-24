import styles from "./bank-cards-home.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BankCard from "@/components/bank-card/bank-card";
import { getCardsOfUser } from "@/services/card-api.service";
import SlideNav from "@/components/ui/slide-nav/slide-nav";
import { Cards_data } from "@/context/context";
import { useContext } from "react";
import UserImage from "@/components/user-image/user-image";
import { formattedAmount } from "@/services/util.service";
import useFetchCards from "@/hooks/useFetchCards.hook";

export default function BankCardsHome() {
  const { cardsData } = useFetchCards();
  const [activeCard, setActiveCard] = useState(1);

  function getAmount() {
    let amount = 0;
    cardsData?.forEach((item) => {
      amount += item.balance;
    });
    return formattedAmount(amount);
  }

  function handleNavClick(itemIndexClicked) {
    let cardData = cardsData[itemIndexClicked - 1];
    let id = `card-${cardData.id}`;
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
    setActiveCard(itemIndexClicked);
  }

  const router = useRouter();
  return (
    <main className={styles.smoothly_appear}>
      <BankCardsTitle getAmount={getAmount}></BankCardsTitle>
      <BankCards cards={cardsData} routerPush={router.push}></BankCards>
      <SlideNav
        className={styles.nav_container}
        num={cardsData?.length}
        active={activeCard}
        handleNavClick={handleNavClick}
      />
    </main>
  );
}

/* internal compoennts */
function BankCards(props) {
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

function BankCardsTitle({ getAmount }) {
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
