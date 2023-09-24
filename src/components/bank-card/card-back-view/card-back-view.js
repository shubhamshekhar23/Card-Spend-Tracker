import styles from "../bank-card.module.scss";
import PropTypes from "prop-types";

CardBackView.propTypes = {
  onPointerUp: PropTypes.func.isRequired,
};

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
