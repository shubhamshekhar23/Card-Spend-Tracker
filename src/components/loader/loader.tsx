import React, { useState, useEffect } from "react";

import styles from "./loader.module.scss";

type LoaderPropTypes = {};

export default function Loader(props: LoaderPropTypes) {
  useEffect(() => {}, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.loader_container}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
}
