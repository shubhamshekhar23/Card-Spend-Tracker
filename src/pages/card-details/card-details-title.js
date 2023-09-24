import styles from "./card-details.module.scss";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { classForTitle } from "./class-provider.service";

export function CardDetailsTitle(props) {
  return (
    <div className={styles.header}>
      <span>
        <UilArrowLeft
          color="white"
          onClick={() => props.back()}
          height={40}
          width={40}
        />
      </span>
      <h3 className={classForTitle(props.sliderPosition)}>Salary Card</h3>
    </div>
  );
}
