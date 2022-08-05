import React from "react";
import * as S from "./Style";
import ButtonNav from "../ButtonNav/ButtonNav";
import shapeOrange from "../../assets/shape.png";
import logo from "../../assets/logo.svg";
import "../../App.css";
import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

const SectionOne = () => {
  const [sectionAtual, setSectionAtual] = React.useState(1);
  const [position, setPosition] = React.useState(0);

  const secaoAtual = (number) => {
    setSectionAtual(number);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setPosition(window.pageYOffset);
      setSectionAtual(0);
    });
  }, [position]);

  return (
    <S.Main position={position}>
      <motion.img
        id="shapeOrangeSectionOne"
        src={shapeOrange}
        alt=""
        className="firstText"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      />
      <header>
        <motion.img
          id="logo"
          src={logo}
          alt="Logo do site"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
        <motion.nav
          className="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div id="traco1"></div>
          <div id="traco2"></div>
          <div id="traco3"></div>
        </motion.nav>
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
        <motion.div
          className="sobre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
      </div>
      <nav className="navButtons">
        <motion.a
          href="#shapeOrangeSectionOne"
          onClick={() => secaoAtual(1)}
          className={sectionAtual === 1 ? "ativo" : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ButtonNav />
        </motion.a>
        <motion.a
          href="#secondText"
          onClick={() => secaoAtual(2)}
          className={sectionAtual === 2 ? "ativo" : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <ButtonNav />
        </motion.a>
        <motion.a
          href="#!"
          onClick={() => secaoAtual(3)}
          className={sectionAtual === 3 ? "ativo" : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <ButtonNav />
        </motion.a>
        <motion.a
          href="#!"
          onClick={() => secaoAtual(4)}
          className={sectionAtual === 4 ? "ativo" : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <ButtonNav />
        </motion.a>
      </nav>
    </S.Main>
  );
};

export default SectionOne;
