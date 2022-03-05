/* eslint-disable */

import { useState } from "react";
import Styles from "./App.module.scss";
import Categories from "./components/Categories";
import items from "./components/data";
import Menu from "./components/Menu";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className={Styles.container}>
        <div className={Styles.title}>
          <h2 className={Styles["title__heading"]}>our menu</h2>
          <div className={Styles["title__underline"]}></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
