import styles from "./transaction-history.module.scss";
import { TRANSACTION_TYPE } from "@/constants/entity.constants";
import { UilShare, UilCar, UilMusicNote } from "@iconscout/react-unicons";
import RoundPill from "@/ui/round-pill/round-pill";

export default function TransactionHistory({ data }) {
  return (
    <main className={styles.main}>
      <TransactionByDate data={data} />
    </main>
  );
}

function TransactionTypeButton({ type }) {
  const btnMap = {
    [TRANSACTION_TYPE.card2card]: <UilShare color="white" />,
    [TRANSACTION_TYPE.music]: <UilMusicNote color="white" />,
    [TRANSACTION_TYPE.vehicle]: <UilCar color="white" />,
  };
  const btnColor = {
    [TRANSACTION_TYPE.card2card]: "pink",
    [TRANSACTION_TYPE.music]: "yellow",
    [TRANSACTION_TYPE.vehicle]: "blue",
  };
  return <RoundPill color={btnColor[type]}>{btnMap[type]}</RoundPill>;
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
