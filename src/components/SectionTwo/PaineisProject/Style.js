import styled from "styled-components";


export const PaineisProject = styled.div`
    display:flex;
    align-items:flex-start;
   .paineis {
       position:relative;
       z-index:99;
       margin-top:80px;
    .quadradoOne {
      width: 291px;
      height: 301px;
      background: var(--white);
      margin-left: 147px;
      z-index: 99;
}
.quadradoTwo {
     position: absolute;
     top:-20px;
     left: -20px;
     z-index:-99;
     box-shadow:5px 5px 15px rgba(0,0,0,.8);
     width: 291px;
     height: 301px;
     background: var(--orange-escuro);
     margin-left: 147px;
    }
}

.content{
    margin-top:80px;
    margin-left:48px;
    h1{
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: 0.02em;
        color: var(--orange);
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 160%;
        letter-spacing: 0.02em;
        color: var(--white);
        max-width:542px;
        width:100%;
        margin-top:16px;
    }

    .tecs{
        p{
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.02em;
            color: var(--orange);
            margin-top:15px;
        }

        .iconesTec{
            margin-top:18px;
            margin-bottom: 65px;
            img + img{
                margin-left:15px;
            }
        }

        .linkProject{
            color:var(--white);
            margin-right:32.39px;
            cursor:pointer;
            font-size:20px;
        }
        .gitHubProject{
            color:var(--white);
            cursor:pointer;
            font-size:20px;
        }
    }
}
`