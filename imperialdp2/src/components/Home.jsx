import React, { useState } from "react";

import "./home.css";
import "./animation.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import { Link } from "react-router-dom";

const Home = () => {
  const [title_slide, set_title_slide] = useState(false);
  const [shin, set_shin] = useState(false);

  function click_con(shin_bool) {
    if (!title_slide) {
      set_title_slide(true);
      set_shin(shin_bool);
      document.documentElement.style = "overflow: auto";
    }
  }

  return (
    <>
      <div id="main_body">
        <div
          onClick={() => {
            if (title_slide) set_title_slide(false);
          }}
        >
          {title_slide ? <Header shin_bool={shin} /> : <DefaultHeader />}
        </div>
        <div className={`${title_slide ? "slide-top" : "title_con"}`}>
          <TitleButton name={"Shinshi"} onClick={() => click_con(true)} />
          <TitleButton name={"Soushi"} onClick={() => click_con(false)} />
        </div>

        <div
          className={`body_con ${title_slide ? "mod_blur-in" : "disappear"}`}
        >
          <h1
            className={`${shin ? "chosen_title_right" : "chosen_title_left"}`}
          >
            {`${shin ? "紳士" : "壮士"}`}
          </h1>
          <Slideshow />
        </div>

        <Footer />
      </div>
    </>
  );
};

function DefaultHeader() {
  return (
    <div className="top_bar">
      <Link to={"/"} className={"link title_link"}>
        meiji
      </Link>
    </div>
  );
}

function TitleButton({ name, onClick }) {
  return (
    <button className={"shi_container"} id={name + "_title"} onClick={onClick}>
      {name}
    </button>
  );
}

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2750;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
        }}
      >
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }} />
        ))}
      </div>
      <div className="slideshowButtons">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowButton${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Home;
