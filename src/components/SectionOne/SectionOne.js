import React from "react";
import * as S from "./Style";
import myImg from "../../assets/imgPerfil.jpg";

const SectionOne = () => {
  const [positionX, setPositionX] = React.useState(400);
  const [positionY, setPositionY] = React.useState(500);

  function coordenadaPainel(event) {
    let posX = event.clientX;
    let posY = event.clientY;
    setPositionX(() => posX);
    setPositionY(() => posY);
  }

  return (
    <S.SectionOne
      onMouseMove={coordenadaPainel}
      positionX={positionX}
      positionY={positionY}
    >
      <h2>
        Sobre <span>Mim</span>
      </h2>

      <div className="sobreMim">
        <div className="painel">
          <div className="quadradoOne">
            {/* <img src={myImg} alt="Minha foto" /> */}
          </div>
          <div className="quadradoTwo"></div>
        </div>
        <div className="textoBio">
          <h1 className="firstText">
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

export default React.memo(SectionOne);
