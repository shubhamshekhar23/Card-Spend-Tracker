import styles from "./text-button.module.scss";

export default function TextButton({ children }) {
  return (
    <button className={styles.text_button}>
      <span>{children}</span>
    </button>
  );
}
