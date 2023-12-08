import React, { useState, useEffect } from "react";

import styles from "./add-transaction-button.module.scss";

import TextButton from "@/ui/text-button/text-button";
import Dialog from "@/components/dialog/dialog";
import { AddTransactionForm } from "../add-transaction-form/add-transaction-form";

type AddTransactionButtonPropTypes = {};

export function AddTransactionButton(props: AddTransactionButtonPropTypes) {
  const [state, setState] = useState(false);

  useEffect(() => {}, []);

  function onCancelForm() {
    setState(false);
  }

  function onSubmitForm(formData: any) {
    /* write logic to update the state */
  }

  return (
    <main className={styles.add_transaction_button_container}>
      <TextButton btnType="primary" onClick={() => setState(true)}>
        Add Transaction
      </TextButton>
      {state && (
        <Dialog>
          <AddTransactionForm onCancel={onCancelForm} onSubmit={onSubmitForm} />
        </Dialog>
      )}
    </main>
  );
}
