import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";

let counter = 0;
export default function Cart() {
  const counter = useSelector((state) => state);
  let items = counter.arr.map((item) => jank({ item: item }));
  console.log(items.length);
  return (
    <>
      <Header shin_bool={true} />
      <div>Cart {items} </div>
      <Footer />
    </>
  );
}

function jank(item) {
  counter++;
  return <div key={counter}>{item.item.Name}</div>;
}
