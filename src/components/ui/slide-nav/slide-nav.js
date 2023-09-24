import { ChildButtons } from "./child-buttons/child-buttons";
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
