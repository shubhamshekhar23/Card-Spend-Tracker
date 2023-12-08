import "@/styles/globals.scss";

import CardsContextProvider from "../context/cards-context";
import CatalogueContextProvider from "../context/catalogue.context";
import TransactionHistoryContextProvider from "../context/transaction-history-context";
import GlobalContextProvider from "../context/global-context";
import { useGlobalContext } from "../context/global-context";
import { Loader } from "../components/loader/loader";

export default function App({ Component, pageProps }) {
  // const { isLoading } = useGlobalContext();
  return (
    <>
      <GlobalContextProvider>
        <CardsContextProvider>
          <CatalogueContextProvider>
            <TransactionHistoryContextProvider>
              {/* {isLoading && <Loader />} */}
              <Component {...pageProps} />
            </TransactionHistoryContextProvider>
          </CatalogueContextProvider>
        </CardsContextProvider>
      </GlobalContextProvider>
      <div id="modal-root"></div>
    </>
  );
}
