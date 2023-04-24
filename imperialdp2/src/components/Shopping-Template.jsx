import React from "react";
import "./shopping_temp.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import data from "../data/data.json";

const BANNER_SRCS = [
  "suit_banner.jpg",
  "hat_banner.jpg",
  "lit_banner.jpg",
  "kimono_banner.png",
  "geta_banner.jpg",
  "magazine_banner.jpg",
];

export default function ShoppingTemplate({
  shin_bool,
  title_card_ind,
  category,
}) {
  let banners = BANNER_SRCS.map((bann) => bann);
  let items = data.items.map((item) =>
    ShoppingItem({ category: category, item: item })
  );
  items = items.filter((e) => {
    return e !== null;
  });

  return (
    <>
      <Header shin_bool={shin_bool} />
      <div className="title_card blur-in">
        <img
          className="banner_img"
          src={require("./../img/" + banners[title_card_ind])}
          alt="title_card"
        />
        <div className="banner_title">{category}</div>
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
