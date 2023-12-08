import React, { useState, useEffect } from "react";

import styles from "./add-transaction-button.module.scss";

import TextButton from "@/ui/text-button/text-button";

type AddTransactionButtonPropTypes = {};

export function AddTransactionButton(props: AddTransactionButtonPropTypes) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.add_transaction_button_container}>
      <TextButton type="primary">Add Transaction</TextButton>
    </main>
  );
}
