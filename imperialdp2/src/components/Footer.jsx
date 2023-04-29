import React from "react";

export default function Footer() {
  return (
    <div className="footer_con">
      <a href="https://www.utjapanlab.com/">
        <img
          style={{ height: "15vh", width: "60vh" }}
          src={require("./../img/japanlab.png")}
          alt="japanlab"
        />
      </a>
    </div>
  );
}
