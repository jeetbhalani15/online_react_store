import styles from "./master-layout-view.module.scss";
import { ProductDataType } from "../../../../fetchData/product-data";
import CardComponent from "../../../card-component";

function MasterView({ data,id,updateId}: {data: ProductDataType[];id: number | null;updateId: (id: number) => void;
}) {
  return (
    <div className={styles.masterView}>
      {data?.map((pd: ProductDataType) => {
        return (
          <div
            key={pd?.id}
            className={styles.productCard}
            onClick={() => {
              updateId(pd.id!);
            }}
          >
            <CardComponent data={pd} selected={id === pd.id} />
          </div>
        );
      })}
    </div>
  );
}

export default MasterView;
