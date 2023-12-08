import "@/styles/globals.scss";

import CardsContext from "../context/cards-context";
import CatalogueContext from "../context/catalogue.context";
import TransactionHistoryContext from "../context/transaction-history";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CardsContext>
        <CatalogueContext>
          <TransactionHistoryContext>
            <Component {...pageProps} />
          </TransactionHistoryContext>
        </CatalogueContext>
      </CardsContext>
      <div id="modal-root"></div>
    </>
  );
}
