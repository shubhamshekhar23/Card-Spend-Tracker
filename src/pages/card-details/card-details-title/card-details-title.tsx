import styles from "../card-details.module.scss";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { classForTitle } from "../class-provider.service";

type CardDetailsTitlePropTypes = {
  back: () => void;
  sliderPosition: Number;
};

export function CardDetailsTitle({
  back = () => {},
  sliderPosition = 0,
}: CardDetailsTitlePropTypes) {
  return (
    <div className={styles.header}>
      <span>
        <UilArrowLeft
          color="white"
          onClick={() => back()}
          height={40}
          width={40}
        />
      </span>
      <h3 className={classForTitle(sliderPosition)}>Salary Card</h3>
    </div>
  );
}
