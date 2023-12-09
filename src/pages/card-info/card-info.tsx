import React, { useState, useEffect } from "react";

import styles from "./card-info.module.scss";

import CardDetails from "@/features/card/components/card-details/card-details";

type CardInfoPropTypes = {};

export default function CardInfo(props: CardInfoPropTypes) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.card_info_container}>
      <CardDetails />
    </main>
  );
}
