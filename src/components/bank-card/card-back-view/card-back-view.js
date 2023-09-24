import styles from "../bank-card.module.scss";

export function CardBackView({ onPointerUp }) {
  return (
    <div onPointerUp={onPointerUp}>
      {/* strip */}
      <div className={styles.strip}></div>
      <div className={styles.cvv_section}>
        <span>633</span>
      </div>
    </div>
  );
}
