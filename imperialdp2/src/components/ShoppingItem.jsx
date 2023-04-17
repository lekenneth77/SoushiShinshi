import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import FadeInSection from "./Fadein";

import "./shopping_item.css";
import "./animation.css";

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
      <div className="body_con">
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
          <h1 style={{ textDecoration: "underline", marginBottom: "2vh" }}>
            Description
          </h1>
          <div id="item_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            modi asperiores nam laboriosam, reprehenderit atque, cumque quia
            impedit qui cum eius itaque dolore pariatur eveniet repellendus
            voluptatibus a iusto ut.
          </div>
        </div>
      </div>
      <FadeInSection>
        <div className="comments_con">
          <h1 id="comment_title">Comments</h1>
          <div className="comment">1</div>
          <div className="comment">2</div>
          <div className="comment">3</div>
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
