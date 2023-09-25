import styles from "../bank-card.module.scss";
import PropTypes from "prop-types";

CardBackView.propTypes = {
  onPointerUp: PropTypes.func.isRequired,
  data: PropTypes.object,
};

export function CardBackView({ onPointerUp, data }) {
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
