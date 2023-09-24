import styles from "../card-details.module.scss";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { classForTitle } from "../class-provider.service";
import PropTypes from "prop-types";

CardDetailsTitle.propTypes = {
  back: PropTypes.func,
  sliderPosition: PropTypes.number,
};

export function CardDetailsTitle({ back = () => {}, sliderPosition = 0 }) {
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
