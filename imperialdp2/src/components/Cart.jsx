import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";

import "./cart.css";

let counter = 0;
export default function Cart() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);
  let prices = counter.arr.map((item) => parseInt(item.Price));
  let items = counter.arr.map((item) =>
    CartItem({ item: item, dispatch: dispatch })
  );
  //check if items.length is > 0, if so then make a clear button
  let total = prices.reduce((partialSum, a) => partialSum + a, 0);

  return (
    <>
      <Header shin_bool={true} />
      <div className="page_body">
        <div id="checkout_con">
          <div>Total Cost: ${total}</div>
          <button
            onClick={() => {
              alert("Unable to checkout!");
            }}
          >
            Checkout
          </button>
        </div>
        <div id="your_cart">Your Items</div>
        {items}
      </div>
      <Footer />
    </>
  );
}

function CartItem({ item, dispatch }) {
  counter++;
  // onClick={() => dispatch({ type: "INCREMENT", item: item })}
  return (
    <div key={counter} className="cart_item">
      <button onClick={() => dispatch({ type: "DECREMENT", item: item })}>
        X
      </button>
      <img
        className="item_img"
        src={require("./../img/" + item.Image_src)}
        alt="item_img"
      />
      <div className="item_txt">
        {item.Name} {"$" + item.Price}
      </div>
    </div>
  );
}
