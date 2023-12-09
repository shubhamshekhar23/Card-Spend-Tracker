import React, { useState, useEffect } from "react";

import styles from "./expense-overview-screen.module.scss";

type ExpenseOverviewScreenPropTypes = {};

export default function ExpenseOverviewScreen(
  props: ExpenseOverviewScreenPropTypes
) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.expense_overview_screen_container}>
      <h1>Expense Overview</h1>
      <ul>
        <li>Total Monthly Expenses: $750</li>
        <li>Most Expensive Category: Food</li>
        <li>Least Expensive Category: Entertainment</li>
        <li>Monthly Budget Goal: $800 (You are under your budget!)</li>
      </ul>

      <h3>Recommendations:</h3>
      <ul>
        <li>Consider reducing spending in the Food category.</li>
        <li>
          Explore ways to save on Utilities, such as energy-efficient practices.
        </li>
        <li>Evaluate entertainment expenses for potential savings.</li>
      </ul>
    </main>
  );
}
