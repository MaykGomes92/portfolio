import styled from "styled-components";

export const Main = styled.main`

  a:visited {
    color: transparent;
  }

  background-color: var(--black);
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  #iconGit {
    position: absolute;
    right: 46.39px;
    top: 233.39px;
    cursor: pointer;
    width: 24.22px;
    height: 23.61px;
    transition:1s;
    :hover{
      transform: rotateZ(360deg);
      width: 34.22px;
      height: 33.61px;
    }
  }

  #iconLinkedin {
    position: absolute;
    right: 46.39px;
    cursor: pointer;
    top: 291.56px;
    width: 24.22px;
    height: 23.61px;
    transition:1s;
    :hover{
      transform: rotateZ(360deg);
      width: 34.22px;
      height: 33.61px;
    }
  }
  

  #iconWpp {
    position: absolute;
    right: 46.39px;
    cursor: pointer;
    top: 348.56px;
    width: 24.22px;
    height: 23.61px;
    transition:1s;
    :hover{
      transform: rotateZ(360deg);
      width: 34.22px;
      height: 33.61px;
    }
  }
  

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
      z-index: 99;
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
    margin-top: 250px;
    .sobre {
      h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 80px;
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
        margin-top:16px;
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
          line-height: 23px;
          letter-spacing: 0.02em;
          color: white;
          padding-top: 10px;
          width: 159px;
          height: 43px;
          position: absolute;
          margin-top: 5px;
          margin-left: -5px;
          transition: .2s;
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

  .navButtons{
    display:flex;
    font-size:30px;
    flex-direction: column;
    margin-left: 50px;
    position:fixed;
    z-index:99;
    button{
      cursor:pointer;
    }

    .ativo button{
      background:var(--orange);
    }


    a:nth-child(1) button{
      background:  ${(props) => props.position < 500 ? 'var(--orange)' : 'none'};

      border:2px solid ${(props) => props.position > 1120 && props.position < 1800 ? 'var(--black)' : 'orange'};
    }
    a:nth-child(2) button{
      background:  ${(props) => props.position > 520 && props.position < 1050 ? 'var(--orange)' : 'none'};

      border:2px solid ${(props) => props.position > 1070 && props.position < 1800 ? 'var(--black)' : 'orange'};
    }
    a:nth-child(3) button{
      background:  ${(props) => props.position > 1050 ? 'var(--black)' : 'none'};

      border:2px solid ${(props) => props.position > 1060 && props.position < 1800 ? 'var(--black)' : 'orange'};
    }
    a:nth-child(4) button{
      background:  ${(props) => props.position > 1850 ? 'var(--orange)' : 'none'};

      border:2px solid ${(props) => props.position > 1050 && props.position < 1800 ? 'var(--black)' : 'orange'};
    }
  }

  @media (max-width:975px){
    #logo{
      z-index:999;
      width:30px;
      margin:inherit;
      margin-left:12px;
      margin-top:40px;
    }
    .information {
      margin-top:150px;
      .sobre {
        h1 {
          position:relative;
        z-index:9999;
        font-style: normal;
        font-weight: 700;
        font-size: 70px;
        line-height: 97px;
        letter-spacing: 0.02em;
        color: var(--white);
        span {
          color: orange;
        }
      }
      h3 {
        position:relative;
        z-index:9999;
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 44px;
        letter-spacing: 0.02em;
        color: var(--white);
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;         position:relative;
        z-index:9999;
        color: var(--white);
        letter-spacing: 0.005em;
        margin-top:16px;
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
          line-height: 23px;
          letter-spacing: 0.02em;
          color: white;
          padding-top: 10px;
          width: 159px;
          height: 43px;
          position: absolute;
          margin-top: 5px;
          margin-left: -5px;
          transition: .2s;
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
    .navButtons{
      display:none;
    }
  }
`;
