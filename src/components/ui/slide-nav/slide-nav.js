import styles from "./slide-nav.module.scss";

function ChildButtons({ num, active }) {
  const arr = new Array(num).fill(1);

  function isActive(src) {
    let classNameLists = [styles.nav_btn];

    if (src == active) {
      classNameLists.push(styles.active_nav);
    }
    return classNameLists.join(" ");
  }

  return arr.map((item, index) => {
    return <button key={index + 1} className={isActive(index + 1)}></button>;
  });
}

export default function SlideNav({ num, active }) {
  return (
    <div className={styles.main}>
      <ChildButtons num={num} active={active} />
    </div>
  );
}
