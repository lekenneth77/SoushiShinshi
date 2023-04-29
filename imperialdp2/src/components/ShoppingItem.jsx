import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import FadeInSection from "./Fadein";

import "./style/shopping_item.css";
import "./style/animation.css";

const SIZES = ["XS", "S", "M", "L", "XL"];

export default function ShoppingItem({ shin_bool, item }) {
  const [size, setSize] = useState("XS");
  let size_buttons = SIZES.map((size) =>
    CreateSizeButton({ size: size, onSizeClick: () => setSize(size) })
  );
  const dispatch = useDispatch();
  return (
    <>
      <Header shin_bool={parseInt(shin_bool) === 1 ? true : false} />
      <div className="body_container">
        <div className="left_img_con">
          <img
            id="item_img"
            src={require("./../img/" + item.Image_src)}
            alt={"Alt: " + item.Image_src}
          />
        </div>
        <div className="right_info_con">
          <div id="item_name">{item.Name}</div>
          <div id="item_price">{item.Price + "$"}</div>
          <div id="size">Size: {size} </div>
          <div>{size_buttons}</div>
          <div>
            <button
              className="cart_button"
              onClick={() => dispatch({ type: "INCREMENT", item: item })}
            >
              ADD TO CART
            </button>
          </div>
          <h1
            style={{
              textDecoration: "underline",
              marginBottom: "2vh",
              fontSize: "5vh",
            }}
          >
            Description
          </h1>
          <div id="item_desc">{item.Desc}</div>
        </div>
      </div>
      <FadeInSection>
        <div className="comments_con">
          <h1 id="comment_title">Comments</h1>
          <div className="comment">{item.c1}</div>
          <div className="comment">{item.c2}</div>
          <div className="comment">{item.c3}</div>
        </div>
      </FadeInSection>
      <Footer />
    </>
  );
}

function CreateSizeButton({ size, onSizeClick }) {
  return (
    <button key={size} className="size_button" onClick={onSizeClick}>
      {size}
    </button>
  );
}
