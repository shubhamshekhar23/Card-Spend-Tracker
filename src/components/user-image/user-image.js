import styles from "./user-image.module.scss";
import { UilEstate } from "@iconscout/react-unicons";

export default function UserImage(props) {
  return (
    <img className={styles.user_image} src="https://picsum.photos/200" alt="" />
  );
}
