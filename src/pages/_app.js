import "@/styles/globals.scss";

import CardsContextProvider from "../context/cards-context";
import CatalogueContextProvider from "../context/catalogue.context";
import TransactionHistoryContextProvider from "../context/transaction-history-context";
import GlobalContextProvider from "../context/global-context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalContextProvider>
        <CardsContextProvider>
          <CatalogueContextProvider>
            <TransactionHistoryContextProvider>
              <Component {...pageProps} />
            </TransactionHistoryContextProvider>
          </CatalogueContextProvider>
        </CardsContextProvider>
      </GlobalContextProvider>
      <div id="modal-root"></div>
    </>
  );
}
