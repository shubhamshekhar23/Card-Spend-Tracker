import React, { useState, useEffect } from 'react';

import styles from './expense-chart.module.scss';

type ExpenseChartPropTypes = {
};

export function ExpenseChart(props : ExpenseChartPropTypes) {
  const [state, setState] = useState({});

  useEffect(() => {

  }, []);

  return (
    <main className={ styles.expense_chart_container }>
      ExpenseChart Component says Hello word
    </main>
  );
}