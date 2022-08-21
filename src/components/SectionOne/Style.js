import styled from "styled-components";

export const SectionOne = styled.section`
  background: var(--black);
  width: 100%;
  padding-bottom:130px;
  h2 {
    margin-left: 200px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.02em;
    color: #fefefe;
    span {
      color: var(--orange);
    }
  }

  .sobreMim {
    display: flex;
    margin-left: 100px;

    .textoBio {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap-reverse;
      width: 100%;
      #firstText {
        margin-right: auto;
        max-width: 585px;
        width: 100%;
        margin-top: 95px;
        font-style: normal;
        font-weight: 500;
        font-size: 23px;
        line-height: 160%;
        letter-spacing: 0.02em;
        color: var(--white);
        padding-left:50px;
        span {
          color: var(--orange);
        }
      }

      #secondText {
        max-width: 585px;
        width: 100%;
        font-style: normal;
        font-weight: 500;
        font-size: 23px;
        line-height: 160%;
        letter-spacing: 0.02em;
        color: var(--white);
        margin:auto;
        margin-top: 60px;
        padding-left:50px;
        span {
          color: var(--orange);
        }
      }
    }
    .painel {
      position: relative;
    }
    .quadradoOne {
      position: relative;
      width: 450px;
      height: 490px;
      margin-left: 147px;
      margin-right:30px;
      margin-top: 127px;
      z-index: 99;
      background: linear-gradient(140deg,black 80%,var(--orange-escuro));
      img {
        width:100%;
        height:100%;
      }
    }

    .quadradoTwo {
      position: absolute;
      margin-top: 120px;
      top:0px;
      box-shadow:5px 5px 15px rgba(0,0,0,.8);
      left: 0px;
      width: 450px;
      height: 490px;
      background: var(--orange-escuro);
      margin-left: 147px;
    }
  }

  @media(max-width:1350px){

    #linkA{
      margin-bottom:30px;
    }
    .sobreMim{
      margin:auto;
      .painel{
        margin:auto;
        margin-left:50px;
      }
      .quadradoOne{
        width:350px;
        height:350px;
        margin:auto;
      }
      
      .quadradoTwo{
        width:350px;
        height:350px;
        margin:auto;
      }
    }
    
    .sobreMim {
      .textoBio{
        margin-top:50px;
        justify-content:center;
        align-items:center;
        #firstText{
          font-size:1.3rem;   
          margin:0;
        }
        #secondText{
          font-size:1.3rem;   
        }
      }
    }
  }
  
@media(max-width:975px){

  h2{
    text-align:center;
    margin:auto;
  }
  
  .sobreMim{
    flex-direction:column;
      margin:auto;
      .painel{
          margin:auto;
  }
  .quadradoOne{
    width:350px;
    height:350px;
    margin:auto;
  }

  .quadradoTwo{
      width:350px;
      height:350px;
      margin:auto;
    }
  }
  
}

@media(max-width:575px){
  .sobreMim{
    margin-top:50px;
    .textoBio{
      padding:10px;
      #firstText{
        font-size:1rem;
      }
      #secondText{
        font-size:1rem;
      }
    }
    .quadradoOne{
      width:250px;
      height:250px;
    }
    .quadradoTwo{
      width:250px;
      height:250px;
    }
  }

}
`;
