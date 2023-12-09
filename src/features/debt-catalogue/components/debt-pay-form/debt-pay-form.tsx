import React, { useState, useEffect } from "react";

import styles from "./debt-pay-form.module.scss";

type DebtPayFormPropTypes = {};

export default function DebtPayForm(props: DebtPayFormPropTypes) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.debt_pay_form_container}>
      DebtPayForm Component says Hello word
    </main>
  );
}
