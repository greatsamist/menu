import React from "react";
import Styles from "./Menu.module.scss";

const Menu = ({ items }) => {
  return (
    <div className={Styles.menu}>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className={Styles["menu__item"]}>
            <img src={img} alt={title} className={Styles["menu__photo"]} />
            <div className={Styles["menu__info"]}>
              <header>
                <h4>{title}</h4>
                <h4 className={Styles["menu__price"]}>${price}</h4>
              </header>
              <p className={Styles["menu__desc"]}>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
