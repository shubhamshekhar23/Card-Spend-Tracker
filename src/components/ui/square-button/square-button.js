import styles from "./square-button.module.scss";

export default function SquareButton({ children }) {
  return (
    <button className={styles.square_button}>
      <span>{children}</span>
    </button>
  );
}
