import React from 'react'
import * as S from './Style'
import Button from './ButtonsFooter/index'
import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
const index = () => {
  return (
    <S.Footer id='footerLink'>
      <h1>Gostou do meu trabalho?</h1>
      <p>Entre em contato comigo pelas minhas redes sociais</p>
      <div className='buttonsNav'>
      <Button imgRede={<AiOutlineGithub />} link='https://github.com/MaykGomes92' />
      <Button imgRede={<BsLinkedin />} link='https://www.linkedin.com/in/mayk-gomes-11b86222b/' />
      <Button imgRede={<BsWhatsapp />} link='https://api.whatsapp.com/send?phone=5521980748627&text=Ol%C3%A1%2C%20fique%20a%20vontade%20para%20mandar%20uma%20mensagem%20o%2F' />
      </div>

      <p className='creditos'>Produzido por <span>Leonam Santtana</span> e <span className='desenvol'>Desenvolvido por Mayk Gomes.</span></p>
    </S.Footer>
  )
}

export default index