import { useState } from "react";

import FooterNav from "@/components/footer-nav/footer-nav";
import { SCREEN_TYPE } from "@/constants/screen.constants";

import BankCardsHome from "./bank-cards-home/bank-cards-home";
import Catalogue from "./catalogue/catalogue";
import History from "./history/history";
import styles from "./home.module.scss";
import Menu from "./menu/menu";

export default function Home() {
  const [activeScreen, setActiveScreen]: any = useState(SCREEN_TYPE.home);

  function getCorrectScreen() {
    switch (activeScreen) {
      case SCREEN_TYPE.home:
        return <BankCardsHome />;
      case SCREEN_TYPE.catalogue:
        return <Catalogue />;
      case SCREEN_TYPE.history:
        return <History />;
      case SCREEN_TYPE.menu:
        return <Menu />;
      default:
        break;
    }
  }

  function makeActiveScreen(val: any) {
    setActiveScreen(val);
  }

  return (
    <>
      <main className={styles.main}>
        {/* screen choice */}
        {getCorrectScreen()}
      </main>
      {/* footer nav */}
      <FooterNav clickHandler={makeActiveScreen} activeScreen={activeScreen} />
    </>
  );
}
