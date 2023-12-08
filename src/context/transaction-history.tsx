import { createContext, useState } from "react";

export const Transaction_History_Data: any = createContext(null);

export default function TransactionHistoryContext({ children }: any) {
  const [transactionHistoryData, setTransactionHistoryData] = useState([]);

  return (
    <Transaction_History_Data.Provider
      value={{ transactionHistoryData, setTransactionHistoryData }}
    >
      {children}
    </Transaction_History_Data.Provider>
  );
}
