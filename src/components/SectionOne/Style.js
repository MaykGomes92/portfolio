import styled from "styled-components";

export const SectionOne = styled.section`
  background: var(--black);
  width: 100%;
  h2 {
    margin-left: 200px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.02em;
    color: #fefefe;
    span {
      color: var(--orange);
    }
  }

  .sobreMim {
    display: flex;
    margin-left: 100px;

    .textoBio {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap-reverse;
      width: 100%;
      .firstText {
        margin-right: auto;
        max-width: 585px;
        width: 100%;
        margin-top: 95px;
        font-style: normal;
        font-weight: 500;
        font-size: 23px;
        line-height: 160%;
        letter-spacing: 0.02em;
        color: var(--white);
        padding-left:50px;
        span {
          color: var(--orange);
        }
      }

      #secondText {
        max-width: 585px;
        width: 100%;
        font-style: normal;
        font-weight: 500;
        font-size: 23px;
        line-height: 160%;
        letter-spacing: 0.02em;
        color: var(--white);
        margin:auto;
        margin-top: 60px;
        padding-left:50px;
        span {
          color: var(--orange);
        }
      }
    }
    .painel {
      position: relative;
    }
    .quadradoOne {
      position: relative;
      width: 450px;
      height: 490px;
      background: var(--white);
      margin-left: 147px;
      margin-top: 127px;
      z-index: 99;

      img {
        width: 100%;
        border-radius: 50%;
      }
    }

    .quadradoTwo {
      position: absolute;
      margin-top: 120px;
      top: ${(event) => "-" + event.position / 20 + "px"};
      left: ${(event) => "-" + event.position / 20 + "px"};
      width: 450px;
      height: 490px;
      background: var(--orange-escuro);
      margin-left: 147px;
    }
  }
`;
