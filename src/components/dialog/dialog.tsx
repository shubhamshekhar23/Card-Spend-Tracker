import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./dialog.module.scss";

type DialogPropTypes = {
  onClose?: any;
  children: any;
};

export default function Dialog({ onClose, children }: DialogPropTypes) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return createPortal(
    <div className={styles.dialog_overlay}>
      <div className={styles.dialog}>
        <button className={styles.close_button} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as any
  );
}
