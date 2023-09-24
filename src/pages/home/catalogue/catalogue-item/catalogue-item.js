import styles from "../catalogue.module.scss";
import TextButton from "@/ui/text-button/text-button";
import { formattedAmount } from "@/services/util.service";
import { CatalogueTypeButton } from "../catalogue-type-button/catalogue-type-button";

import PropTypes from "prop-types";

CatalogueItem.propTypes = {
  data: PropTypes.object,
};

export function CatalogueItem({ data = {} }) {
  return (
    <div className={styles.transaction_section}>
      <CatalogueTypeButton type={data.type} />
      <div className={styles.details_amount}>
        <div className={styles.transaction__description}>
          <h3>{data.title}</h3>
          <h4>The debt is {formattedAmount(data.amount)}</h4>
        </div>
        <TextButton>Pay</TextButton>
      </div>
    </div>
  );
}
