import React, { useState, useEffect } from "react";

import styles from "./debt-pay-button.module.scss";
import TextButton from "@/components/ui/text-button/text-button";

type DebtPayButtonPropTypes = {};

export function DebtPayButton(props: DebtPayButtonPropTypes) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.debt_pay_button_container}>
      <TextButton>Pay</TextButton>
    </main>
  );
}
