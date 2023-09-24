import { BILL_TYPE } from "@/constants/entity.constants";
import RoundPill from "@/ui/round-pill/round-pill";
import {
  UilEstate,
  UilCar,
  UilPhone,
  UilWifi,
  UilBolt,
} from "@iconscout/react-unicons";

export function CatalogueTypeButton({ type }) {
  const btnMap = {
    [BILL_TYPE.mobile]: <UilPhone color="white" />,
    [BILL_TYPE.internet]: <UilWifi color="white" />,
    [BILL_TYPE.vehicle]: <UilCar color="white" />,
    [BILL_TYPE.house]: <UilEstate color="white" />,
    [BILL_TYPE.utility]: <UilBolt color="white" />,
  };
  return <RoundPill gradient="blue">{btnMap[type]}</RoundPill>;
}
