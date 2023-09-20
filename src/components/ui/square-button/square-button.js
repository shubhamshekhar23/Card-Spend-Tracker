import styles from "./square-button.module.scss";

export default function SquareButton(props) {
  return (
    <button className={styles.square_button}>
      <span>{props.children}</span>
    </button>
  );
}
