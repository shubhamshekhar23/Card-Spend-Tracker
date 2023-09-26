import { ChildButtons } from "./child-buttons/child-buttons";
import styles from "./slide-nav.module.scss";

type SlideNavPropTypes = {
  className?: any;
  num: Number;
  active: Number;
  handleNavClick?: (params: any) => void;
};

export default function SlideNav({
  className,
  num,
  active,
  handleNavClick,
}: SlideNavPropTypes) {
  return (
    <main className={className}>
      <div className={styles.main}>
        <ChildButtons
          num={num}
          active={active}
          handleNavClick={handleNavClick}
        />
      </div>
    </main>
  );
}
