import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress, useMediaQuery } from "@mui/material";

import styles from "./home-page-layout.module.scss";
import DetailView from "../detail-layout-view/detail-view";

import MasterView from "../master-layout-view/master-view";

import { fetch_product_data, fetch_pd_by_id } from "../../../../fetchData/fetch-data";

function HomePage() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const desktopMode = useMediaQuery((theme: any) =>theme.breakpoints.up("md"));
  const getProducts = async () => await fetch_product_data();
  const getProductsById = async () => {
    if (selectedProductId === null) return;
    return await fetch_pd_by_id({ id: selectedProductId });
  };
  const { data: getAllProductData, isLoading: isFetchingAllProductStatus } = useQuery({queryKey: ["fetch-all-product-data"], queryFn: getProducts, });
  
  
  
  const {
    data: getSelectedProductDetailsData,
    isLoading: isFetchingSelectedProductDetails,
  } = useQuery({queryKey: ["fetch-all-product-by-id", selectedProductId],enabled: Boolean(selectedProductId),queryFn: getProductsById,});

  const get_master_layout_view = () => {
    return (
      <div className={styles.masterViewContainer}>
        {isFetchingAllProductStatus ? (
          <div className={styles.loaderContainer}>
            <CircularProgress />
            <p>Fetching data...</p>
          </div>
        ) : (
          <MasterView
            data={getAllProductData}
            id={selectedProductId}
            updateId={(id) => setSelectedProductId(id)}
          />
        )}
      </div>
    );
  };

  const get_detials_layout = () => {
    return (
      <div className={styles.detailViewContainer}>
        {isFetchingSelectedProductDetails ? (
          <div className={styles.loader}>
            <CircularProgress />
            <p>Fetching data...</p>
          </div>
        ) : (
          <DetailView
            data={getSelectedProductDetailsData}
            desktopMode={desktopMode}
            onBackClick={() => setSelectedProductId(null)}
          />
        )}
      </div>
    );
  };

  return (
    <div className={styles.homePageContainer}>
      {desktopMode ? (
        <>
          {get_master_layout_view()}
          {get_detials_layout()}
        </>
      ) : selectedProductId ? (
        get_detials_layout()
      ) : (
        get_master_layout_view()
      )}
    </div>
  );
}

export default HomePage;
