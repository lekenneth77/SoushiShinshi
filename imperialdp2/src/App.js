// import logo from "./logo.svg";
import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import Shinshi_Home from "./components/Shinshi-Home";
import Soushin_Home from "./components/Soushin-Home";
import ShoppingTemplate from "./components/Shopping-Template";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={Home()} />
          <Route exact path="/shinshi" element={Shinshi_Home()} />
          <Route exact path="/soushi" element={Soushin_Home()} />
          <Route
            exact
            path="/mustaches"
            element={ShoppingTemplate({
              shin_bool: true,
              title_card_ind: 0,
              category: "Mustache",
            })}
          />
          <Route path="/" element={<Navigate replace to="/" />} />
          <Route path="/meiji" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
