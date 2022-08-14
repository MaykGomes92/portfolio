import styled from "styled-components";


export const SectionTwo = styled.section`
position:relative;
background-color:var(--black);
padding-right:20px;
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

@media(max-width:1350px){
    .myPort{
        font-size:1.7rem;
    }
    .motionsPainel{
        margin-left:-190px;
        .content{
            h1{
            font-size:1.4rem;
        }
        p{
            font-size:.9rem;
        }
        }
        .paineis{
            .quadradoOne{
                width:300px;
                height:200px;
            }
            .quadradoTwo{
                width:300px;
                height:200px;
            }
        }
    }
}
@media(max-width:975px){
    .motionsPainel:last-child{
        margin-left:-320px;
    }
    .myPort{
        font-size:1.7rem;
    }
    .motionsPainel{
        .content{
            h1{
            font-size:1.2rem;
        }
        p{
            font-size:.7rem;
        }
        }
        .paineis{
            .quadradoOne{
                width:290px;
                height:190px;
            }
            .quadradoTwo{
                width:290px;
                height:190px;
            }
        }
    }
}

@media(max-width:575px){

    .buttonsNavProjects{
        right:20px;
    }

    .motionsPainel:last-child{
        margin-left:-250px;
        .content{
            margin-left:330px;
        }
    }
    .myPort{
        font-size:1.5rem;
        margin-top:-80px;
    }
    .motionsPainel{
        margin:auto;
        margin-left:0;
        margin-top:15px;
        .content{
            margin:auto;
            h1{
            font-size:1rem;
                text-align:center;
                margin:auto;
        }
        p{
            text-align:center;
            width:250px;
            margin:auto;
            font-size:.7rem;
        }
        }
        .paineis{
            .quadradoOne{
                width:200px;
                height:100px;
            }
            .quadradoTwo{
                width:200px;
                height:100px;
            }
        }
    }

}

`