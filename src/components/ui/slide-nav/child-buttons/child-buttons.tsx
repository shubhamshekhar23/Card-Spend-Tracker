import styles from "../slide-nav.module.scss";

type ChildButtonsPropTypes = {
  num: Number;
  active: Number;
  handleNavClick?: (params: any) => void;
};

export default function ChildButtons({
  num = 1,
  active = 1,
  handleNavClick = () => {},
}: ChildButtonsPropTypes) {
  const arr = new Array(num).fill(1);

  function isActive(src: any) {
    let classNameLists = [styles.nav_btn];

    if (src == active) {
      classNameLists.push(styles.active_nav);
    }
    return classNameLists.join(" ");
  }

  return arr.map((item, index) => {
    return (
      <button
        key={index + 1}
        className={isActive(index + 1)}
        onClick={() => handleNavClick(index + 1)}
      ></button>
    );
  });
}
