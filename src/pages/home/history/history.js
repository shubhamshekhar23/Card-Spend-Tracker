import styles from "./history.module.scss";
import { useState, useEffect } from "react";
import { getTransactionHistory } from "@/services/card-api.service";
import { arrangeHistoryByDate } from "@/services/util.service";
import { TRANSACTION_TYPE } from "@/constants/entity.constants";
import { UilShare, UilCar, UilMusicNote } from "@iconscout/react-unicons";
import RoundPill from "@/ui/round-pill/round-pill";

/* 
  {
    transactionId: 1,
    name: "card to card",
    details: "Maria",
    amount: 100.5,
    info: "credit",
    timestamp: "2023-09-19T12:30:45Z",
    type: 0,
  }

*/

function TransactionTypeButton({ type }) {
  function getRightButtonBasedOnType(type) {
    if (type == TRANSACTION_TYPE.card2card) {
      return (
        <RoundPill color="pink">
          <UilShare color="white" />
        </RoundPill>
      );
    }
    if (type == TRANSACTION_TYPE.music) {
      return (
        <RoundPill color="yellow">
          <UilMusicNote color="white" />
        </RoundPill>
      );
    }
    if (type == TRANSACTION_TYPE.vehicle) {
      return (
        <RoundPill gradient="blue">
          <UilCar color="white" />
        </RoundPill>
      );
    }
  }
  return <>{getRightButtonBasedOnType(type)}</>;
}

function TransactionItem({ data }) {
  return (
    <div className={styles.transaction_section}>
      <TransactionTypeButton type={data.type} />
      <div className={styles.details_amount}>
        <div className={styles.transaction__description}>
          <h3>{data.name}</h3>
          <h4>{data.details}</h4>
        </div>
        <h3>{data.amount}</h3>
      </div>
    </div>
  );
}

function TransactionList({ data }) {
  function getList() {
    return data.map((item) => {
      return <TransactionItem key={item.id} data={item} />;
    });
  }
  return <>{getList()}</>;
}

function TransactionByDate({ data }) {
  return (
    <>
      {Object.keys(data).map((item, index) => {
        return (
          <div key={index}>
            <h2 className={styles.date_title}>{item}</h2>
            <TransactionList data={data[item]} />
          </div>
        );
      })}
    </>
  );
}

export default function History() {
  let [historyData, setHistoryData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getTransactionHistory();
      let mapData = arrangeHistoryByDate(response);
      setHistoryData(mapData);
    }
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <TransactionByDate data={historyData} />
    </main>
  );
}
