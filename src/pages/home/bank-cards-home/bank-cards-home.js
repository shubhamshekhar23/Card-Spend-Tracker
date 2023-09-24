import styles from "./bank-cards-home.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getCardsOfUser } from "@/services/card-api.service";
import SlideNav from "@/components/ui/slide-nav/slide-nav";
import { Cards_data } from "@/context/context";
import { useContext } from "react";
import { formattedAmount } from "@/services/util.service";
import useFetchCards from "@/hooks/useFetchCards.hook";
import { BankCards } from "./bank-cards";
import { BankCardsTitle } from "./bank-cards-title";

export default function BankCardsHome() {
  const { cardsData } = useFetchCards();
  const [activeCard, setActiveCard] = useState(1);

  const router = useRouter();

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
