export interface TransactionForm {
  name: string;
  details: string;
  transactionDate: string;
  transactionTime: string;
  amount: string;
  transactionType: "debit" | "credit";
}

export interface TransactionSubmitPayload {
  name: string;
  details: string;
  amount: number;
  info: "credit" | "debit";
  timestamp: string;
  type: number;
}

export interface TransactionData {
  id: number;
  name: string;
  details: string;
  amount: number;
  info: "credit" | "debit";
  timestamp: string;
  type: number;
}
