import React from 'react'
import * as S from './Style'
import { VscFilePdf } from "react-icons/vsc";
import { AiOutlineArrowDown } from "react-icons/ai";
import curriculo from '../../assets/curriculo-mayk-gomes-program-2024-001.pdf'
const Index = () => {

  const [contato, setContato] = React.useState({
    name: 'dasdsa',
    email: 'dasdas'
  })

  return (
    <S.SectionContato>
      <h1>Entre em contato e envie uma mensagem !</h1>
      <div className='contentForm'>

        <section className='sectionLeftPdf'>
          <h2>Meu currículo</h2>
          <AiOutlineArrowDown className='arrowCurriculo'/>
          <a href={curriculo} download>{<VscFilePdf />}</a>
        </section>

        <section className='sectionRightForm'>
          <form action="https://api.staticforms.xyz/submit" method="post">
            <input type="hidden" name="accessKey" value="03934f0c-6b2e-41be-8e6d-3657181ac97f" />
            <label >
              Nome
              <input type="text" name="name" required />
            </label>
            <label>
              Assunto
              <input type="text" name="subject" required />
            </label>
            <label>
              Conteúdo
            <textarea name="message" required />
            </label>
            <input type="hidden" name="redirectTo" value='https://portfolio-delta-three-11.vercel.app/' />
            <input type="submit" value="Enviar" id='btnSubmit' onClick={(e) => alert('Sua mensagem foi enviada !')}/>
          </form>
        </section>
      </div>
      <p className='creditos'><span className='desenvol'>Desenvolvido por Mayk Gomes.</span></p>
    </S.SectionContato>
  )
}

export default Index
