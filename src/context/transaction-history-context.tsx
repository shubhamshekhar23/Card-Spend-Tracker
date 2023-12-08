import { createContext, useContext, useState } from "react";

export const TransactionHistoryContext: any = createContext(null);

export default function TransactionHistoryContextProvider({ children }: any) {
  const [transactionHistoryData, setTransactionHistoryData] = useState([]);

  return (
    <TransactionHistoryContext.Provider
      value={{ transactionHistoryData, setTransactionHistoryData }}
    >
      {children}
    </TransactionHistoryContext.Provider>
  );
}

export const useTransactionHistoryContext: any = () => {
  return useContext(TransactionHistoryContext);
};
