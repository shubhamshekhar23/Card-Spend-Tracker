import styles from "../bank-card.module.scss";
import CardFooter from "../card-footer/card-footer";
import CardSymbol from "../card-symbol/card-symbol";
import CardTitle from "../card-title/card-title";

type CardFrontViewPropTypes = {
  data?: any;
  onPointerUp?: () => void;
  onPointerDown: () => void;
};

export default function CardFrontView({
  data = {},
  onPointerUp = () => {},
  onPointerDown = () => {},
}: CardFrontViewPropTypes) {
  return (
    <div className={styles.card_front} onPointerDown={onPointerDown}>
      <CardTitle data={data}></CardTitle>
      <CardSymbol></CardSymbol>
      <div className={styles.card_number}>{data?.info?.number}</div>
      <CardFooter data={data}></CardFooter>
    </div>
  );
}
