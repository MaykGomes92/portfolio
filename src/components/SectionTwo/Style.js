import styled from "styled-components";


export const SectionTwo = styled.section`
position:relative;
background-color:var(--black);
width:100%;
min-height:100vh;
.shapeOrange{
    position:absolute;
    transform:rotateZ(180deg);
    width: 100%;
    height:100%;
    max-height:850px;
    max-width: 350px;
}

.myPort{
    margin-left:140px;
    padding-top:40px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.02em;
    color:var(--white);
    span{
        color:var(--orange);
    }
}

.buttonsNavProjects{
    position:absolute;
    top:320px;
    right:20px;
    display:flex;
    flex-direction:column;

    button{
        cursor:pointer;
    }
    p+p{
        margin-top:32px;
    }

    .ativo button{
        background-color:var(--orange);
    }

}

`