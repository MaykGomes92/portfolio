import styled from "styled-components";


export const Footer = styled.footer`
    background-color:var(--black);
    padding-top:100px;

    .buttonsNav{
        display:flex;
        align-items:center;
        margin-top:80px;
        justify-content:center;
        div + div{
            margin-left:160px;
        }
    }
h1{
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 77px;
      letter-spacing: 0.02em;
      color: var(--white);
      text-align:center;
}

    p{
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;
        text-align: center;
        letter-spacing: 0.02em;
        color: var(--white);
        width:710px;
        margin:auto;
        margin-top:8px;
    }

    @media(max-width: 575px){
        margin:auto;
        h1{
            font-size:3rem;
        }
        p{
            font-size:1.5rem;
            text-align:center;
            width:100%;
        }
        .buttonsNav{
        display:flex;
        flex-wrap:wrap;
        margin-top:80px;
        justify-content: center;
        width:80%;
        div + div{
            margin-left:85px;
        }
    }
    .creditos{
        margin-left:5px;
        font-size:10px;
    }
    }
`