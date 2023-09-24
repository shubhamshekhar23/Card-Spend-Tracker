import styles from "../card-details.module.scss";
import SquareButton from "@/ui/square-button/square-button";
import { UilShare, UilHistory } from "@iconscout/react-unicons";
import { formattedAmount } from "@/services/util.service";

import PropTypes from "prop-types";

BalanceShareSection.propTypes = {
  card: PropTypes.object,
};

export function BalanceShareSection({ card = {} }) {
  return (
    <div className={styles.balance_share}>
      <div>
        <h5>Balance</h5>
        <h2>{formattedAmount(card?.balance || 0)}</h2>
      </div>
      <div className={styles.btn_group}>
        <SquareButton>
          <UilHistory color="white" />
        </SquareButton>
        <SquareButton>
          <UilShare color="white" />
        </SquareButton>
      </div>
    </div>
  );
}
