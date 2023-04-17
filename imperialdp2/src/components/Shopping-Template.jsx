import React from "react";
import "./shopping_temp.css";
import Header from "./Header";
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
        <div className="item_img">ASDFASDFLKJSADF</div>
      </Link>
      <div className="item_name">Name: {item.Name}</div>
      <div className="item_price">Price: {item.Price}</div>
    </div>
  );
}
