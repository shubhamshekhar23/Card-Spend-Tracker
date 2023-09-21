import styles from "./catalogue.module.scss";
import { useState, useEffect } from "react";
import { getDebtCatalogue } from "@/services/card-api.service";
import { BILL_TYPE } from "@/constants/entity.constants";
import RoundPill from "@/ui/round-pill/round-pill";
import TextButton from "@/ui/text-button/text-button";
import {
  UilEstate,
  UilCar,
  UilPhone,
  UilWifi,
  UilBolt,
} from "@iconscout/react-unicons";

export default function Catalogue() {
  let [catalogueData, setCatalogueData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getDebtCatalogue();
      setCatalogueData(response);
    }
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <h1>Catalogue</h1>
      <TransactionList data={catalogueData} />
    </main>
  );
}

function TransactionList({ data }) {
  function getList() {
    return (
      data &&
      data.map((item) => {
        return <TransactionItem key={item.id} data={item} />;
      })
    );
  }
  return <>{getList()}</>;
}

function TransactionItem({ data }) {
  return (
    <div className={styles.transaction_section}>
      <TransactionTypeButton type={data.type} />
      <div className={styles.details_amount}>
        <div className={styles.transaction__description}>
          <h3>{data.title}</h3>
          <h4>The debt is {data.amount}</h4>
        </div>
        <TextButton>Pay</TextButton>
      </div>
    </div>
  );
}

function TransactionTypeButton({ type }) {
  const btnMap = {
    [BILL_TYPE.mobile]: <UilPhone color="white" />,
    [BILL_TYPE.internet]: <UilWifi color="white" />,
    [BILL_TYPE.vehicle]: <UilCar color="white" />,
    [BILL_TYPE.house]: <UilEstate color="white" />,
    [BILL_TYPE.utility]: <UilBolt color="white" />,
  };
  return <RoundPill gradient="blue">{btnMap[type]}</RoundPill>;
}
