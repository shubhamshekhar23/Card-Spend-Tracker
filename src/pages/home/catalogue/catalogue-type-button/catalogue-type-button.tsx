import {
  UilBolt,
  UilCar,
  UilEstate,
  UilPhone,
  UilWifi,
} from "@iconscout/react-unicons";

import { BILL_TYPE } from "@/constants/entity.constants";
import RoundPill from "@/ui/round-pill/round-pill";

type CatalogueTypeButtonPropTypes = {
  type: number;
};

export function CatalogueTypeButton({
  type = 5,
}: CatalogueTypeButtonPropTypes) {
  const btnMap: { [key: number]: any } = {
    [BILL_TYPE.mobile]: <UilPhone color="white" />,
    [BILL_TYPE.internet]: <UilWifi color="white" />,
    [BILL_TYPE.vehicle]: <UilCar color="white" />,
    [BILL_TYPE.house]: <UilEstate color="white" />,
    [BILL_TYPE.utility]: <UilBolt color="white" />,
  };
  return <RoundPill gradient="blue">{btnMap[type]}</RoundPill>;
}
