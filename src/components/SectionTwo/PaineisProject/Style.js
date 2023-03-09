import styled from "styled-components";


export const PaineisProject = styled.div`
    display:flex;
    align-items:flex-start;
   .paineis {
       position:relative;
       z-index:99;
       margin-top:80px;
    .quadradoOne {
      width: 400px;
      height: 254px;
      background: var(--white);
      margin-left: 147px;
      z-index: 99;
        border:1px solid rgba(255,255,255,.1);
      img{
        width:100%;
        height:100%;
    }
}
.quadradoTwo {
     position: absolute;
     top:0;
     left: 0;
     z-index:-99;
     box-shadow:5px 5px 15px rgba(0,0,0,.8);
     width: 400px;
      height: 254px;
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
        margin-bottom:20px;
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
            margin-bottom: 50px;
            max-width:450px;
            display:flex;
            flex-wrap:wrap;
            img{
                height:18px;
                margin-top:10px;
            }
            img + img{
                margin-left:15px;
            }
        }

        .linkProject{
            color:var(--white);
            margin-right:32.39px;
            cursor:pointer;
            font-size:20px;
            transition:.3s;
            :hover{
                color:#4169E1;
            }
        }
        .gitHubProject{
            color:var(--white);
            cursor:pointer;
            font-size:20px;
            transition:.3s;
            :hover{
                color:#4169E1;
            }
        }
    }
}









@media(max-width:790px){
    flex-wrap:wrap;
    justify-content:center;
    text-align:center;
    .content{
        width:40%;
        margin-top:30px;
        margin-left:0px;
        margin-right:90px;
        justify-content:center;
        margin-left:auto;
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
        margin-top:6px;
    }

    .tecs{
        margin-bottom:10px;
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
            margin-bottom: 20px;
            max-width:450px;
            display:flex;
            flex-wrap:wrap;
            justify-content:center;
            img{
                height:18px;
                margin-top:10px;
            }
            img + img{
                margin-left:15px;
            }
        }

        .linkProject{
            color:var(--white);
            margin-right:32.39px;
            cursor:pointer;
            font-size:20px;
            transition:.3s;
            :hover{
                color:#4169E1;
            }
        }
        .gitHubProject{
            color:var(--white);
            cursor:pointer;
            font-size:20px;
            transition:.3s;
            :hover{
                color:#4169E1;
            }
        }
    }
}

}













@media(max-width:575px){
    display:flex;
    align-items:flex-start;
    flex-direction:column;
    .paineis {
        margin-top:80px;
        .quadradoOne {
            margin-left:-150px;            
        }
    .quadradoTwo {
        margin-left:-150px;
        }
}

.content{
    margin-top:8px;
    margin-left:10px;
    margin-top:25px;
    margin:auto;
    text-align:center;
    h1{
    color:var(--orange-escuro);
    }
    .tecs{
        p{
        color: var(--orange-escuro);
            margin-left:30px;
        }
        .iconesTec{
            margin:auto;
            margin-bottom:20px;
            img{
            text-align:center;
                margin:auto;
                margin-top:5px;
            }
            img + img{
                    margin-left:5px;
                }
            }
        }
}
}
`;