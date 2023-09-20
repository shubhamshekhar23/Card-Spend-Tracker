import styles from "./round-pill.module.scss";
import { UilEstate } from "@iconscout/react-unicons";

/* 
props
  type: small/medium
  color: pink, yellow, blue, purple
  gradient: blue
*/

export default function RoundPill(props) {
  function getClassNameListUsingProps() {
    const { type, color, gradient } = props;
    const btnClassList = [styles.round_pill];

    if (type) btnClassList.push(styles["pill_" + type]);
    if (color) btnClassList.push(styles["pill_" + color]);
    if (gradient) btnClassList.push(styles["pill_gradient_" + gradient]);

    return btnClassList.join(" ");
  }

  return (
    <button className={`${styles.round_pill} ${getClassNameListUsingProps()}`}>
      {props.children}
    </button>
  );
}
