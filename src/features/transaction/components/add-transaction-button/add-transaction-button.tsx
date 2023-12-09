import React, { useState, useEffect, useContext } from "react";

import styles from "./add-transaction-button.module.scss";

import TextButton from "@/ui/text-button/text-button";
import Dialog from "@/components/dialog/dialog";
import AddTransactionForm from "../add-transaction-form/add-transaction-form";
import {
  TransactionForm,
  TransactionSubmitPayload,
} from "interfaces/transaction.interface";
import { transformIntoTransactionPayload } from "./services/form-payload.sewrvice";
import { saveManualTransaction } from "@/services/card-api.service";
import { arrangeHistoryByDate } from "@/services/util.service";
import { useTransactionHistoryContext } from "@/context/transaction-history-context";
import { useGlobalContext } from "@/context/global-context";
import { useCardsContext } from "@/context/cards-context";

type AddTransactionButtonPropTypes = {};

export default function AddTransactionButton(
  props: AddTransactionButtonPropTypes
) {
  const [isDialogShow, setIsDialogShow] = useState(false);
  const { manualBalance, setManualBalance }: any = useCardsContext();

  const { transactionHistoryData, setTransactionHistoryData }: any =
    useTransactionHistoryContext();
  const { isLoading, setIsLoading } = useGlobalContext();

  useEffect(() => {}, []);

  function onCancelForm() {
    setIsDialogShow(false);
  }

  async function onSubmitForm(formData: TransactionForm) {
    const payload = transformIntoTransactionPayload(formData);
    setIsDialogShow(false);

    setIsLoading(true);
    const response = await saveManualTransaction(payload);
    let mapData = arrangeHistoryByDate(response);
    setTransactionHistoryData(mapData);
    adjustManualBalance(payload);
    setIsLoading(false);
  }

  function adjustManualBalance(payload: TransactionSubmitPayload) {
    let { amount, info } = payload;
    if (info == "debit") {
      amount = amount * -1;
    }
    setManualBalance(manualBalance + amount);
  }

  return (
    <main className={styles.add_transaction_button_container}>
      <TextButton btnType="primary" onClick={() => setIsDialogShow(true)}>
        Add Transaction
      </TextButton>
      {isDialogShow && (
        <Dialog>
          <AddTransactionForm onCancel={onCancelForm} onSubmit={onSubmitForm} />
        </Dialog>
      )}
    </main>
  );
}
