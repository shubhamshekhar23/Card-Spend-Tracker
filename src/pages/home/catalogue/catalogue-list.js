import { CatalogueItem } from "./catalogue-item";

export function CatalogueList({ data }) {
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
