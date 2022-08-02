import React from "react";
import * as S from "./Style";
import shapeOrange from "../../assets/shape.png";
import logo from "../../assets/logo.svg";
import "../../App.css";

const SectionOne = () => {
  return (
    <S.Main>
      <img id="shapeOrangeSectionOne" src={shapeOrange} alt="" />
      <header>
        <img id="logo" src={logo} alt="Logo do site" />
        <nav className="menu">
          <div id="traco1"></div>
          <div id="traco2"></div>
          <div id="traco3"></div>
        </nav>
      </header>

      <div className="information">
        <div className="sobre">
          <h1>
            <span>M</span>ayk Gomes
          </h1>
          <h3>Front-end Developer</h3>
          <p>
            Olá. Me chamo Mayk Gomes. Venha tomar um café comigo!{" "}
            <span className="piscar"></span>{" "}
          </p>
          <div className="buttons">
            <a href="" className="buttonConheca">Me Conheça</a>
            <button className="shadowButton"></button>
          </div>
        </div>
      </div>
    </S.Main>
  );
};

export default SectionOne;
