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
            <span>L</span>orem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has bee release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </h1>
          <h1 id="secondText">
            <span>L</span>orem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has bee release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </h1>
        </div>
      </div>
    </S.SectionOne>
  );
};

export default SectionOne;
