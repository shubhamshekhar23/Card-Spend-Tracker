import {
  TransactionForm,
  TransactionSubmitPayload,
} from "interfaces/transaction.interface";

export function transformIntoTransactionPayload(
  formData: TransactionForm
): TransactionSubmitPayload {
  const {
    transactionDate,
    transactionTime,
    name,
    details,
    amount,
    transactionType,
  } = formData;

  const payload: TransactionSubmitPayload = {
    name,
    details,
    amount: Number(amount),
    info: transactionType,
    timestamp: new Date(
      `${transactionDate}T${transactionTime}:00Z`
    ).toISOString(),
    type: 0,
  };
  return payload;
}
