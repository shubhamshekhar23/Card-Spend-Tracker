import styles from "./text-button.module.scss";

type TextButtonPropTypes = {
  type?: "primary" | "transparent";
  children: any;
};

export default function TextButton(props: TextButtonPropTypes) {
  const { type = "transparent", children } = props;

  function getClassForBtn() {
    let arr = [styles.text_button];
    if (type == "transparent") {
      arr.push(styles.btn_transparent);
    }
    if (type == "primary") {
      arr.push(styles.btn_primary);
    }
    return arr.join(" ");
  }

  return (
    <button className={getClassForBtn()}>
      <span>{children}</span>
    </button>
  );
}
