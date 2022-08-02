import styled from "styled-components";

export const Main = styled.main`
  #shapeOrangeSectionOne {
    position: absolute;
    right: 0px;
    max-width: 390px;
    width: 100%;
    height: 100%;
  }

  #logo {
    margin-left: 120px;
    margin-top: 80px;
  }

  header {
    display: flex;
    justify-content: space-between;
    .menu {
      cursor: pointer;
      margin-right: 120px;
      margin-top: 95px;
      #traco1 {
        position: relative;
        width: 30px;
        height: 2px;
        background: var(--black);
      }
      #traco2 {
        position: relative;
        width: 17px;
        height: 2px;
        background: var(--black);
        margin-top: 6px;
        margin-left: auto;
      }
      #traco3 {
        position: relative;
        width: 24px;
        height: 2px;
        background: var(--black);
        margin-top: 6px;
        margin-left: auto;
      }
    }
  }

  .information {
    text-align: center;
    margin-top: 300px;
    .sobre {
      h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 3rem;
        line-height: 97px;
        letter-spacing: 0.02em;
        color: var(--white);
        span {
          color: orange;
        }
      }
      h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: 0.02em;
        color: var(--white);
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: var(--white);
        letter-spacing: 0.005em;

        span {
          margin-left: 5px;
          padding: 0.8px;
          background-color: var(--orange-escuro);
          color: red;
        }
      }

      .buttons {
        margin-top: 48px;
        .buttonConheca {
          text-decoration: none;
          border: none;
          background: var(--orange);
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.02em;
          color: white;
          padding-top:10px;
          width: 159px;
          height: 43px;
          position: absolute;
          margin-top: 5px;
          margin-left: -5px;
          transition: 0.5s;
          cursor: pointer;
          :hover {
            margin: 0px;
          }
        }

        .shadowButton {
          background: var(--orange-escuro);
          border: none;
          z-index: 99;
          width: 159px;
          height: 43px;
        }
      }
    }
  }
`;
