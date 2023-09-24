import { CatalogueItem } from "../catalogue-item/catalogue-item";

import PropTypes from "prop-types";

CatalogueList.propTypes = {
  data: PropTypes.array,
};

export function CatalogueList({ data = [] }) {
  function getList() {
    return (
      data &&
      data.map((item) => {
        return <CatalogueItem key={item.id} data={item} />;
      })
    );
  }
  return <>{getList()}</>;
}
