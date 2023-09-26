import styles from "./square-button.module.scss";

export default function SquareButton(props: any) {
  return (
    <button className={styles.square_button}>
      <span>{props.children}</span>
    </button>
  );
}
