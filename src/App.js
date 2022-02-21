import { useState } from "react";
import Styles from "./App.module.scss";
import Categories from "./components/Categories";
import items from "./components/data";
import Menu from "./components/Menu";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section>
        <div className={Styles.title}>
          <h2 className={Styles["title__heading"]}>our menu</h2>
          <div className={Styles["title__underline"]}></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
