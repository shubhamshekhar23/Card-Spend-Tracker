import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import "./styles/globals.scss";

import CardsContextProvider from "./context/cards-context";
import CatalogueContextProvider from "./context/catalogue.context";
import TransactionHistoryContextProvider from "./context/transaction-history-context";
import GlobalContextProvider from "./context/global-context";

import CardInfo from "./pages/card-info/card-info";
import Home from "./pages/home/home";
import UiStory from "./pages/ui-story/ui-story";

const router = createBrowserRouter([
  {
    path: "/Card-Spend-Tracker-React",
    element: <Navigate to="/home" replace />,
  },
  { path: "/home", element: <Home /> },
  { path: "/card-info", element: <CardInfo /> },
  { path: "/ui-story", element: <UiStory /> },
]);

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <CardsContextProvider>
          <CatalogueContextProvider>
            <TransactionHistoryContextProvider>
              <RouterProvider router={router} />
            </TransactionHistoryContextProvider>
          </CatalogueContextProvider>
        </CardsContextProvider>
      </GlobalContextProvider>
      <div id="modal-root"></div>
    </div>
  );
}

export default App;
