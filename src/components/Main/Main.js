import React from "react";
import * as S from "./Style";
import ButtonNav from "../ButtonNav/ButtonNav";
import shapeOrange from "../../assets/shape.png";
import logo from "../../assets/logo.svg";
import "../../App.css";
import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const SectionOne = () => {
  const [sectionAtual, setSectionAtual] = React.useState(1);

  const secaoAtual = (number) => {
    setSectionAtual(number);
  };

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
      <a href="https://github.com/MaykGomes92" target="_blank" rel="noopener">
        <AiOutlineGithub id="iconGit" />
      </a>
      <a
        href="https://www.linkedin.com/in/mayk-gomes-11b86222b/"
        target="_blank"
        rel="noopener"
      >
        <BsLinkedin id="iconLinkedin" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5521980748627&text=Ol%C3%A1%2C%20fique%20a%20vontade%20para%20mandar%20uma%20mensagem%20o%2F"
        target="_blank"
        rel="noopener"
      >
        <BsWhatsapp id="iconWpp" />
      </a>

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
            <a href=" " className="buttonConheca">
              Me Conheça
            </a>
            <button className="shadowButton"></button>
          </div>
        </div>
      </div>
      <nav className="navButtons">
        <a
          href="#shapeOrangeSectionOne"
          onClick={() => secaoAtual(1)}
          className={sectionAtual === 1 ? "ativo" : ""}
        >
          <ButtonNav />
        </a>
        <a
          href="#secondText"
          onClick={() => secaoAtual(2)}
          className={sectionAtual === 2 ? "ativo" : ""}
        >
          <ButtonNav />
        </a>
        <a href="#!" onClick={() => secaoAtual(3)} className={sectionAtual === 3 ? "ativo" : ""}>
          <ButtonNav />
        </a>
        <a href="#!" onClick={() => secaoAtual(4)} className={sectionAtual === 4 ? "ativo" : ""}>
          <ButtonNav />
        </a>
      </nav>
    </S.Main>
  );
};

export default SectionOne;
