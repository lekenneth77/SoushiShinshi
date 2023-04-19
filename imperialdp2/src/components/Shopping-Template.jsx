import React from "react";
import "./shopping_temp.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import data from "../data/data.json";

export default function ShoppingTemplate({
  shin_bool,
  title_card_ind,
  category,
}) {
  let items = data.items.map((item) =>
    ShoppingItem({ category: category, item: item })
  );
  items = items.filter((e) => {
    return e !== null;
  });

  return (
    <>
      <Header shin_bool={shin_bool} />
      <div style={{ display: "flex" }}>
        <div className="title_card blur-in">TITLE CARD</div>
      </div>
      <div className="shopping_items_con">{items}</div>
      <Footer />
    </>
  );
}

function ShoppingItem({ category, item }) {
  if (item.Category !== category) {
    return null;
  }
  return (
    <div className="shopping_item" key={item.ID}>
      <Link to={"/" + category.toLowerCase() + "/" + item.ID}>
        <img
          className="shopping_img"
          src={require("./../img/" + item.Image_src)}
          alt="alt_image"
        />
      </Link>
      <div className="shopping_name">
        {item.Name}
        {}
        <span className="shopping_price"> ${item.Price}</span>
      </div>
    </div>
  );
}
