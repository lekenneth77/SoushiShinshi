import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function About() {
  return (
    <>
      <Header />
      <div id="about_con">
        <div>
          A fake shopping site made for Professor Dahl's Japanese Imperial
          History class. The project required the transformation of a historical
          reading into a digital project. I chose to represent the differences
          in masculinities idealogies that appeared throughout the Meiji
          Restoration Era through a two way fashion website, one for the Shinshi
          (紳士) and the other for the Soushi (壮士). I understood that it's
          quite difficult to represent the conflict of both the masculinities
          through a shopping site so I tried to represent some of that through
          the comments on each of the shopping items.
        </div>
        <br />
        <div>
          For historical context, some men have decided to use Western outfits
          as the new "masculine" norm and called themselves the 紳士 (which is
          also the modern Japanese word for gentlemen). These were usually
          government officials or older men. While dressing like the westerners
          seemed like Japan was just submitting themselves to the western
          countries, many of the Shinshi did not view it as that way, and purely
          saw it as them becoming a world power just like the western countries.
        </div>
        <br />
        <div>
          However, many younger men (mostly educated men or sons of rich folk)
          believed that dressing just like the Westerners was proving that Japan
          isn't a world power and thus called themselves the Soushi (modern
          Japanese word for barbarian). So, they rebelled by dressing in
          traditional Japanese clothing, but specifically really dirty and
          messed up traditional clothing. They usually roamed the streets and
          rebelled against the Shinshi and were usually nuisances for any law
          enforcement.
        </div>
        <br />
        <div>
          I hope this website helps showcase some of the differences of
          masculine beliefs that was featured during that era.
        </div>
      </div>
      <Footer />
    </>
  );
}
