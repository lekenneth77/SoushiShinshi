import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

let SHIN_LINK_NAMES = ["Suits", "Bowler Hats", "Mustache"];
let SOU_LINK_NAMES = ["Kimono", "Fudonshi", "Geta"];
let EXTRA_LINKS = ["About", "Cart"];

export default function Header({ shin_bool }) {
  let newLinks = [];
  const shin_links = SHIN_LINK_NAMES.map((name) =>
    CreateLink({ name: name, nameOfClass: "def_link " })
  );
  const sou_links = SOU_LINK_NAMES.map((name) =>
    CreateLink({ name: name, nameOfClass: "def_link " })
  );
  const extra_links = EXTRA_LINKS.map((name) =>
    CreateLink({ name: name, nameOfClass: "extra_link " })
  );
  newLinks = shin_bool ? [...shin_links] : (newLinks = [...sou_links]);
  newLinks = [...newLinks, extra_links];

  const counter = useSelector((state) => state);
  let items = counter.arr.map((item) => item);

  return (
    <div className="top_bar">
      <CreateLink name={"meiji"} nameOfClass={"title_link"} /> {newLinks}
      {`${items.length === 0 ? "" : "(" + items.length + ")"}`}
    </div>
  );
}

function CreateLink({ name, nameOfClass }) {
  return (
    <Link
      key={name}
      to={"/" + name.toLowerCase()}
      className={"link " + nameOfClass}
    >
      {name}
    </Link>
  );
}
