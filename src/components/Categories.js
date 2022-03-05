import React from "react";
import styles from "./Categories.module.scss";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className={styles.btnContainer}>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={styles.filterB}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
