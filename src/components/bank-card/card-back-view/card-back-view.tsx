import styles from "../bank-card.module.scss";

type CardBackViewPropTypes = {
  onPointerUp: () => void;
  data: any;
};

export default function CardBackView({
  onPointerUp,
  data,
}: CardBackViewPropTypes) {
  return (
    <div onPointerUp={onPointerUp}>
      {/* strip */}
      <div className={styles.strip}></div>
      <div className={styles.cvv_section}>
        <span>{data?.info?.cvv}</span>
      </div>
    </div>
  );
}
