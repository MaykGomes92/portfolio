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
`