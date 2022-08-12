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

    .creditos{
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: var(--white);
        width:100%;
        text-align:left;
        margin-top:200px;
        padding-bottom:5px;
        margin-left:30px;
        span{
            color:var(--orange-escuro);
        }
        .desenvol{
            color:var(--orange);
        }
    }
`