// import logo from "./logo.svg";
import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import data from "./data/data.json";

import Home from "./components/Home";
import ShoppingTemplate from "./components/Shopping-Template";
import ShoppingItem from "./components/ShoppingItem";
import Cart from "./components/Cart";

export const SHIN_CATEGORIES = ["Suit", "Bowler", "Mustache"];
export const SOU_CATEGORIES = ["Kimono", "Fudonshi", "Geta"];

function App() {
  const item_routes = data.items.map((item) => ShoppingItemRoute(item));
  const shin_routes = SHIN_CATEGORIES.map((category) =>
    ShoppingCategory({ category: category, shin_bool: true })
  );
  const sou_routes = SOU_CATEGORIES.map((category) =>
    ShoppingCategory({ category: category, shin_bool: false })
  );
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={Home()} />
          <Route exact path="/cart" element={Cart()} />
          <Route path="/" element={<Navigate replace to="/" />} />
          <Route path="/meiji" element={<Navigate replace to="/" />} />
          {shin_routes}
          {sou_routes}
          {item_routes}
        </Routes>
      </Router>
    </>
  );
}

function ShoppingCategory({ category, shin_bool }) {
  return (
    <Route
      key={category}
      exact
      path={"/" + (category + "").toLowerCase()}
      element={ShoppingTemplate({
        shin_bool: shin_bool,
        title_card_ind: 0,
        category: category,
      })}
    ></Route>
  );
}

function ShoppingItemRoute(item) {
  return (
    <Route
      key={item.ID}
      exact
      path={"/" + item.Category.toLowerCase() + "/" + item.ID}
      element={ShoppingItem({ shin_bool: item.shin_bool, item: item })}
    ></Route>
  );
}

export default App;
