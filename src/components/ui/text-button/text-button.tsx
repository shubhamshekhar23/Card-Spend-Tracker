import styles from "./text-button.module.scss";

type TextButtonPropTypes = {
  btnType?: "primary" | "transparent";
  children?: any;
  onClick?: any;
  type?: any;
};

export default function TextButton(props: TextButtonPropTypes) {
  const { btnType = "transparent", children, type = "button" } = props;

  function getClassForBtn() {
    let arr = [styles.text_button];
    if (btnType == "transparent") {
      arr.push(styles.btn_transparent);
    }
    if (btnType == "primary") {
      arr.push(styles.btn_primary);
    }
    return arr.join(" ");
  }

  return (
    <button type={type} className={getClassForBtn()} onClick={props.onClick}>
      <span>{children}</span>
    </button>
  );
}
