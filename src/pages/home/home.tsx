import { useState } from "react";

import FooterNav from "@/components/footer-nav/footer-nav";
import { SCREEN_TYPE } from "@/constants/screen.constants";

import BankCardsHome from "@/features/card/components/bank-cards-home/bank-cards-home";
import Catalogue from "@/features/debt-catalogue/components/catalogue/catalogue";
import TransactionHistoryScreen from "@/features/transaction/components/transaction-history-screen/transaction-history-screen";
import { ExpenseOverviewScreen } from "@/features/expense-overview/components/expense-overview-screen/expense-overview-screen";
import styles from "./home.module.scss";
import { useGlobalContext } from "@/context/global-context";
import Loader from "@/components/loader/loader";

export default function Home() {
  const [activeScreen, setActiveScreen]: any = useState(SCREEN_TYPE.home);
  const { isLoading, setIsLoading } = useGlobalContext();

  const Active_Screen_Map: any = {
    [SCREEN_TYPE.home]: <BankCardsHome />,
    [SCREEN_TYPE.catalogue]: <Catalogue />,
    [SCREEN_TYPE.history]: <TransactionHistoryScreen />,
    [SCREEN_TYPE.expense_overview]: <ExpenseOverviewScreen />,
  };

  function makeActiveScreen(val: any) {
    setActiveScreen(val);
  }

  return (
    <>
      <main className={styles.main}>
        {/* screen choice */}
        {Active_Screen_Map[activeScreen]}
      </main>
      {/* footer nav */}
      <FooterNav clickHandler={makeActiveScreen} activeScreen={activeScreen} />
      {isLoading && <Loader />}
    </>
  );
}
