import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import SlideNav from "@/components/ui/slide-nav/slide-nav";
import useFetchCards from "@/hooks/useFetchCards.hook.ts";
import { formattedAmount } from "@/services/util.service.ts";

import BankCards from "./bank-cards/bank-cards";
import styles from "./bank-cards-home.module.scss";
import BankCardsTitle from "./bank-cards-title/bank-cards-title";

export default function BankCardsHome() {
  const { cardsData, manualBalance } = useFetchCards();
  const [activeCard, setActiveCard] = useState(1);

  const router = useRouter();

  function getAmount() {
    let amount = 0;
    cardsData?.forEach((item: any) => {
      amount += item.balance;
    });
    amount += manualBalance;
    return formattedAmount(amount);
  }

  function handleNavClick(itemIndexClicked: any) {
    let cardData = cardsData[itemIndexClicked - 1];
    let id = `card-${cardData.id}`;
    document.getElementById(id)?.scrollIntoView({
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
