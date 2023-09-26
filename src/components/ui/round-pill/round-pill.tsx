import styles from "./round-pill.module.scss";
import { UilEstate } from "@iconscout/react-unicons";

type RoundPillPropTypes = {
  children?: any;
  color?: "pink" | "yellow" | "blue";
  gradient?: "blue";
};

export default function RoundPill({
  children,
  color,
  gradient,
}: RoundPillPropTypes) {
  function getClassNameListUsingProps() {
    const btnClassList = [styles.round_pill];

    if (color) btnClassList.push(styles["pill_" + color]);
    if (gradient) btnClassList.push(styles["pill_gradient_" + gradient]);

    return btnClassList.join(" ");
  }

  return (
    <button className={`${styles.round_pill} ${getClassNameListUsingProps()}`}>
      {children}
    </button>
  );
}
