import React, { useState } from "react";

import "./home.css";
import "./animation.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import { Link } from "react-router-dom";

let global_title = false;

const Home = () => {
  const [title_slide, set_title_slide] = useState(false);
  const [shin, set_shin] = useState(false);

  function click_con(shin_bool) {
    if (!title_slide) {
      set_title_slide(true);
      set_shin(shin_bool);
      document.body.style = "overflow: auto";
      global_title = shin_bool;
    }
  }

  return (
    <>
      <div id="main_body">
        <div
          onClick={() => {
            if (title_slide) {
              set_title_slide(false);
            }
          }}
        >
          {title_slide ? <Header shin_bool={shin} /> : <DefaultHeader />}
        </div>
        <div className={`${title_slide ? "slide-top" : "title_con"}`}>
          <TitleButton name={"shinshi"} onClick={() => click_con(true)} />
          <TitleButton name={"soushi"} onClick={() => click_con(false)} />
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
  let name_var = "";
  if (name === "soushi") {
    name_var = "壮士";
  } else {
    name_var = "紳士";
  }
  return (
    <button className={"shi_container"} id={name + "_title"} onClick={onClick}>
      <div className="title_name">{name_var}</div>
      <img
        className="title_img"
        src={require("./../img/title_" + name + ".jpg")}
        alt={name + " alt"}
      />
    </button>
  );
}

const shin_slides = ["group.jpg", "nice_men.png", "court.jpg"];
const sou_slides = ["group_samurai.jpg", "more_samurai.jpg", "samurai.png"];
const delay = 2750;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);
  let slide;
  if (global_title) {
    slide = shin_slides;
  } else {
    slide = sou_slides;
  }

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
          prevIndex === shin_slides.length - 1 ? 0 : prevIndex + 1
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
        {slide.map((img_src, index) => (
          <img
            className="slide"
            src={require("./../img/" + img_src)}
            key={index}
            alt="slide"
          />
        ))}
      </div>
      <div className="slideshowButtons">
        {shin_slides.map((_, idx) => (
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
