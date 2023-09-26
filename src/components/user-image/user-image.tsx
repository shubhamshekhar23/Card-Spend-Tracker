import styles from "./user-image.module.scss";

export default function UserImage(props: any) {
  return (
    <img className={styles.user_image} src="https://picsum.photos/200" alt="" />
  );
}
