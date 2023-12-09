import CatalogueItem from "../catalogue-item/catalogue-item";

type CatalogueListPropTypes = {
  data: Array<any>;
};

export default function CatalogueList({ data = [] }: CatalogueListPropTypes) {
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
