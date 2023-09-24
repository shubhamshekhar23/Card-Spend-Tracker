import { TRANSACTION_TYPE } from "@/constants/entity.constants";
import { UilShare, UilCar, UilMusicNote } from "@iconscout/react-unicons";
import RoundPill from "@/ui/round-pill/round-pill";

import PropTypes from "prop-types";

TransactionTypeButton.propTypes = {
  type: PropTypes.number,
};

export function TransactionTypeButton({ type = 1 }) {
  const btnMap = {
    [TRANSACTION_TYPE.card2card]: <UilShare color="white" />,
    [TRANSACTION_TYPE.music]: <UilMusicNote color="white" />,
    [TRANSACTION_TYPE.vehicle]: <UilCar color="white" />,
  };
  const btnColor = {
    [TRANSACTION_TYPE.card2card]: "pink",
    [TRANSACTION_TYPE.music]: "yellow",
    [TRANSACTION_TYPE.vehicle]: "blue",
  };
  return <RoundPill color={btnColor[type]}>{btnMap[type]}</RoundPill>;
}
