import React from "react";
import * as S from "./Style";
import myImg from "../../assets/imgPerfil.jpg";
import {
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const SectionOne = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY,
    [0, 500, 500, 800],
    [0, -40, -40, 40],
  );


  return (
    <S.SectionOne>
      <h2 id="linkA" >
        Sobre <span>Mim</span>
      </h2>

      <div className="sobreMim">
        <div className="painel">
          <div className="quadradoOne">
            <img src={myImg} alt="Minha foto" />
          </div>
          <motion.div style={{ y: y1, x: y1 }} className="quadradoTwo" />
        </div>
        <div className="textoBio">
          <h1 id="firstText">
            <span>O</span>lá o/, Me chamo Mayk Gomes, sou do Rio de Janeiro e sou desenvolvedor Front-End.
            Comecei minha jornada em 2020, e sempre sabendo o que eu queria, apaixonado por tecnologia, sempre soube que não poderia ser de outra área além dessa.
          </h1>
          <h1 id="secondText">
            <span>A</span> procura de sempre evoluir, continuarei em frente, aprendendo novas Tecnologias, Frameworks e enfrentando desafios. Sempre em busca e disposto a me reinventar.<br/>Seja bem vindo ao meu Portfólio o/
          </h1>
        </div>
      </div>
    </S.SectionOne>
  );
};

export default SectionOne;
