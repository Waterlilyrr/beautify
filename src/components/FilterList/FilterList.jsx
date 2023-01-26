import styles from "./index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const FilterList = () => {
  const { filterStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [filterCategory, setFilterCategory] = useState("");

  const Category = [
    { phrase: "5 Stars" },
    { phrase: "4 Stars" },
    { phrase: "3 Stars" },
    { phrase: "2 Stars" },
    { phrase: "1 Stars" },
  ];
  const Brand = [
    { phrase: "Colourpop" },
    { phrase: "Boosh" },
    { phrase: "Sally b's skin yummies" },
    { phrase: "Penny lane organics" },
    { phrase: "Nudus" },
  ];
  const filtersCategory = [
    // { name: "Rating" },
    { name: "Brand" },
    { name: "Category" },
  ];

  const handleFilterClick = () => {
    dispatch({ type: "OPEN_FILTER_MENU" });
    if (filterStatus.isFilterActive === true) {
      dispatch({ type: "CLOSE_FILTER_MENU" });
      dispatch({ type: "CLOSE_CATEGORY_LIST" });
    }
  };

  const handleCategoryClick = (value) => {
    dispatch({ type: "OPEN_CATEGORY_LIST" });

    if (filterStatus.isCategoryClicked === true && filterCategory === value) {
      dispatch({ type: "CLOSE_CATEGORY_LIST" });
    }
    setFilterCategory(value);
  };

  const handleSingleLabel = () => {
    dispatch({ type: "CLOSE_CATEGORY_LIST" });
    dispatch({ type: "CLOSE_FILTER_MENU" });
  };

  return (
    <div className={styles.FilterList}>
      <div className={styles.mainDiv}>
        <button className={styles.filterBtn} onClick={handleFilterClick}>
          <p>Filters</p>
          <p>{filterStatus?.isFilterActive ? "-" : "+"}</p>
        </button>
        {filterStatus?.isFilterActive && (
          <div className={styles.categories}>
            {filtersCategory?.map((item, index) => (
              <label
                className={styles.category}
                onClick={() => handleCategoryClick(item.name)}
                key={index}
              >
                {item.name}
              </label>
            ))}
          </div>
        )}
      </div>
      {filterStatus?.isFilterActive === true &&
      filterStatus?.isCategoryClicked === true ? (
        <div className={styles.filtersDiv}>
          {(filterCategory === "Category" ? Category : Brand).map(
            (item, index) => (
              <label
                className={styles.filter}
                key={index}
                onClick={handleSingleLabel}
              >
                {item.phrase}
              </label>
            )
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FilterList;
