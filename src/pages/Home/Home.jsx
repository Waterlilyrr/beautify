import styles from "../../../src/App.module.scss";
import MakeupList from "../../components/MakeupList";
import Slider from "../../components/Slider";
// import Navbar from "../../components/Navbar";
import FilterList from "../../components/FilterList";
import { memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const { filterStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [typeKey, setTypeKey] = useState("Nail polish");
  const [brandKey, setBrandKey] = useState("");

  const handleOverlayClick = () => {
    dispatch({ type: "CLOSE_FILTER_MENU" });
    dispatch({ type: "CLOSE_CATEGORY_LIST" });
  };

  return (
    <div className={styles.App}>
      {/* <Navbar /> */}

      <Slider />
      <FilterList setBrandKey={setBrandKey} setTypeKey={setTypeKey} />
      {(filterStatus.isFilterActive || filterStatus.isCategoryClicked) && (
        <div className={styles.overlay} onClick={handleOverlayClick}></div>
      )}
      {<MakeupList brandKey={brandKey} typeKey={typeKey} />}
      {/* {console.log("APP!!!")} */}
    </div>
  );
};

export default memo(Home);