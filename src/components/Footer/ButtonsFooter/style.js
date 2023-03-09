import styled from "styled-components";


export const Buttons = styled.div`
    .container{   
        position:relative;
        width:167px;
        height:167px;
        .btnPrincipal{
            position:absolute;
            width:167px;
            height:167px;
            background-color:var(--orange);
            text-align:center;
            font-size:45px;
            line-height:167px;
            color:white;
            z-index:99;
            bottom:-15px;
            left:15px;
            cursor:pointer;
            transition:.5s;
            color:white;
            :hover{
                bottom:0;
                left:0;
            }
        }
        .shadowButton{
            position:absolute;
            width:167px;
            height:167px;
            background-color:var(--orange-escuro);
        }
    }

    @media(max-width: 910px){
        .container{
            width:40px;
         .btnPrincipal{
            width:100px;
            height:100px;
            line-height:110px;
            font-size:30px;
            bottom:47px;
            left:15px;
            :hover{
              bottom:67px;
              left:0px;
            }
         }
         .shadowButton{
            width:100px;
            height:100px;
         }
        }
    }
`