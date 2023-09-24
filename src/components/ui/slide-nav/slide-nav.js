import styles from "./slide-nav.module.scss";

export default function SlideNav(props) {
  return (
    <main className={props.className}>
      <div className={styles.main}>
        <ChildButtons {...props} />
      </div>
    </main>
  );
}

function ChildButtons({ num, active, handleNavClick }) {
  const arr = new Array(num).fill(1);

  function isActive(src) {
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
