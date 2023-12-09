import React, { useState, useEffect, useRef } from "react";

import styles from "./add-transaction-form.module.scss";
import TextButton from "@/ui/text-button/text-button";
import { TransactionForm } from "interfaces/transaction.interface";
import {
  getFormatDateFromCurrentDate,
  getFormatTimeFromCurrentDate,
} from "@/services/util.service";

const INITIAL_FORM_STATE: TransactionForm = {
  name: "",
  details: "",
  transactionDate: "",
  transactionTime: "",
  amount: "",
  transactionType: "debit", // Default value
};

type AddTransactionFormPropTypes = {
  onCancel: any;
  onSubmit: any;
};

export function AddTransactionForm({
  onCancel,
  onSubmit,
}: AddTransactionFormPropTypes) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  useEffect(() => {
    applyDefaultTransactionDate();
  }, []);

  function applyDefaultTransactionDate() {
    setFormData({
      ...formData,
      transactionDate: getFormatDateFromCurrentDate(),
      transactionTime: getFormatTimeFromCurrentDate(),
    });
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onSubmit(formData);
  };

  function handleCancelForm(e: any) {
    onCancel();
  }

  return (
    <main className={styles.add_transaction_form_container}>
      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        <div className={styles.form_field}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.form_field}>
          <label htmlFor="details">Details:</label>
          <input
            type="text"
            id="details"
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.form_field}>
          <label htmlFor="transactionDate">Transaction Date:</label>
          <input
            type="date"
            id="transactionDate"
            name="transactionDate"
            value={formData.transactionDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.form_field}>
          <label htmlFor="transactionTime">Transaction Time:</label>
          <input
            type="time"
            id="transactionTime"
            name="transactionTime"
            value={formData.transactionTime}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.form_field}>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.form_field}>
          <label htmlFor="transactionType">Transaction Type:</label>
          <div className={styles.form_field_radio_group}>
            <label>
              <input
                type="radio"
                name="transactionType"
                value="debit"
                checked={formData.transactionType === "debit"}
                onChange={handleInputChange}
              />
              Debit
            </label>
            <label>
              <input
                type="radio"
                name="transactionType"
                value="credit"
                checked={formData.transactionType === "credit"}
                onChange={handleInputChange}
              />
              Credit
            </label>
          </div>
        </div>
        <div className={styles.footer_action}>
          <TextButton onClick={handleCancelForm}>Cancel</TextButton>
          <TextButton btnType="primary" type="submit">
            Save
          </TextButton>
        </div>
      </form>
    </main>
  );
}
