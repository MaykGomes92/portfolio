import styled from "styled-components";



export const SectionContato = styled.section`
background-color: var(--black);
display:flex;
flex-direction:column;
padding-top:200px;
justify-content:center;
color:white;
align-items:center;


.creditos{
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: var(--white);
        width:100%;
        margin-top:15px;
        span{
            color:var(--orange-escuro);
        }
        .desenvol{
            color:var(--orange);
        }
    }

h1{
    font-size:2.6rem;
    margin-bottom:20px;
}
.contentForm {
    display:flex;
    flex-wrap:wrap;
    width:55%;
    justify-content:center;
    border:2px solid var(--orange-escuro);
    border-radius:20px;
    .sectionLeftPdf {
        padding:10px;
        max-width:500px;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
 a{
     border-radius:5px;
     padding:25px;
     border:2px solid var(--orange-escuro);
     font-size:15rem;
     color:#ff261b;
     filter:brightness(50px);
     transition:0.4s ease-in-out;
            :hover{
                color:whitesmoke;
                background-color:var(--orange);
            }
    }
}

.sectionRightForm{
    width:50%; 
    max-width:500px;
    width:100%;
    
    form{
        display:flex;  
        padding:20px;
        flex-direction:column;
        justify-content:center;
        max-width:500px;
        width:100%;
        border-radius:5px;
        
        label{
            margin-bottom:20px;
            font-size:1.3rem;
            input {        
                width:100%;
                padding:10px;
                border-radius:7px;
                margin-top:10px;
            }

            textarea {
                width:100%;
                margin-top:10px;
                padding:10px;
                border-radius:7px;
                height:90px;
            }
        }
        input[type='submit']{
            cursor: pointer;
            margin-top:10px;
            padding:25px;
            background-color:transparent;
            color:white;
            border:2px solid var(--orange-escuro);
            border-radius:5px;
            font-size:1.4rem;
            letter-spacing:3px;
            transition:0.4s ease-in-out;
            :hover{
                background-color:var(--orange);
            }
        }
    }
}
h1{
    color:white;
}



}

@media (max-width:570px){

    h1{
        font-size:1.5rem;
        text-align:center;
    }

    .contentForm {
        width:85%;
        .sectionLeftPdf {
 a{
     border:2px solid var(--orange-escuro);
     font-size:5rem;
    }
}
    }

}
`