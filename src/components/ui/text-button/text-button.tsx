import styles from "./text-button.module.scss";

export default function TextButton(props: any) {
  return (
    <button className={styles.text_button}>
      <span>{props.children}</span>
    </button>
  );
}
