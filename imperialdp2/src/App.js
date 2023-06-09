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
import About from "./components/About";
import Cart from "./components/Cart";

export const SHIN_CATEGORIES = ["Suits", "Hats", "Literature"];
export const SOU_CATEGORIES = ["Kimono", "Geta", "Magazines"];

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
          <Route exact path="/about" element={About()} />
          <Route path="/meiji" element={<Navigate replace to="/" />} />
          {shin_routes}
          {sou_routes}
          {item_routes}
        </Routes>
      </Router>
    </>
  );
}

let category_counter = -1;
function ShoppingCategory({ category, shin_bool }) {
  category_counter++;
  if (category_counter >= SOU_CATEGORIES.length + SHIN_CATEGORIES.length) {
    category_counter = 0;
  }
  return (
    <Route
      key={category}
      exact
      path={"/" + (category + "").toLowerCase()}
      element={ShoppingTemplate({
        shin_bool: shin_bool,
        title_card_ind: category_counter,
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
