import { IconButton } from "@mui/material";
import styles from "./detail-view.module.scss";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { ProductDataType } from "../../../../fetchData/product-data";
import CardComponent from "../../../card-component";

function DetailView({
  data,
  desktopMode,
  onBackClick,
}: {
  data?: ProductDataType;
  desktopMode: boolean;
  onBackClick: () => void;
}) {
  return (
    <div className={styles.detailView}>
      {data ? (
        <>
          {!desktopMode && (
            <div className={styles.backButton}>
              <IconButton onClick={onBackClick}>
                <ArrowBackRoundedIcon />
              </IconButton>
            </div>
          )}
          <CardComponent data={data} isDetailView />
        </>
      ) : (
          <div className={styles.emptyState}>
          <h6>Nothing to display...</h6>
          <h1>Select an item to display</h1>
          <h4>
            Select an item from the master view to display details in the detail
            view.
          </h4>
        </div>
      )}
    </div>
  );
}

export default DetailView;
