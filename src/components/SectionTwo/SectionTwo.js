import React from 'react'
import * as S from './Style'
import shape from '../../assets/shape.png'
import projeto1 from '../../assets/reactSeries.jpg'
import projeto2 from '../../assets/projeto2.jpg'
import projeto3 from '../../assets/projeto3.jpg'
import projeto4 from '../../assets/projeto4.jpg'
import projeto5 from '../../assets/projeto5.jpg'
import PaineisProject from './PaineisProject/PaineisProject'
import ButtonNav from '../ButtonNav/ButtonNav'

import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import reactRouter from '../../assets/reac-router.png'
import styledComp from '../../assets/styled-comp.png'

const SectionTwo = () => {

  const [buttonNavAtivo, setButtonNavAtivo] = React.useState(1)

  const projetosNav = () => {
    if (buttonNavAtivo === 1) {
      return (
        <>
          <PaineisProject html={html} css={css} js={js} react={react} styledComp={styledComp} reactRouter={reactRouter}
            linkProjeto='https://react-series.vercel.app/' linkGithub='https://github.com/MaykGomes92/React-Series' imgProject={projeto1} nameProject='Website Séries' descricao=' O projeto consiste em ser um site de séries completo, tendo todas as séries populares e existentes da api IMDb.' mLeft='228px' />

          <PaineisProject html={html} css={css} js={js} react={react} reactRouter={reactRouter} linkProjeto='https://website-vikings-router-priv.vercel.app/'
            linkGithub='https://github.com/MaykGomes92/WebSite-Vikings-ReactRouter' imgProject={projeto2} nameProject='Website Vikings' descricao='Projeto feito usando React Router e outras libs do React. Inspirado na série Vikings.' mLeft='350px' />
        </>
      )
    } else if (buttonNavAtivo === 2) {
      return (
        <>
          <PaineisProject html={html} css={css} js={js} linkProjeto='https://projeto-web-site-car-q9pp4diuu-mayk-gomes98-hotmailcom.vercel.app/' linkGithub='https://github.com/MaykGomes92/projeto-web-site-car' imgProject={projeto3} nameProject='Mini Game Ballons' descricao='Um mini game feito em Html, Css e Js puro. Conta com 3 dificuldade, pause e um placar.' mLeft='228px' />

          <PaineisProject html={html} react={react} css={css} js={js} linkProjeto='https://projeto-web-site-car-q9pp4diuu-mayk-gomes98-hotmailcom.vercel.app/' linkGithub='https://github.com/MaykGomes92/projeto-web-site-car' imgProject={projeto4} nameProject='Mercedez' descricao='Com bastante animações Keyframes, um site inspirado por carros de corrida e campeões.' mLeft='350px' />
        </>
      )
    } else if (buttonNavAtivo === 3) {
      return (
        <>
          <PaineisProject html={html} react={react} css={css} js={js} linkProjeto='https://react-api-cep.vercel.app/' linkGithub='https://github.com/MaykGomes92/Procurador-de-Cep-React' imgProject={projeto5} nameProject='Buscador de Cep' descricao='Consumindo um Api, ele retorna várias informações ao inserir um CEP.' mLeft='228px' />

          <PaineisProject linkProjeto='https://website-vikings-router-priv.vercel.app/'
            linkGithub='https://github.com/MaykGomes92/WebSite-Vikings-ReactRouter' imgProject={projeto2} nameProject='Website Vikings' descricao='Projeto feito usando React Router e outras libs do React.' mLeft='350px' />
        </>
      )
    } else if (buttonNavAtivo === 4) {
      return (
        <>
          <PaineisProject linkProjeto='https://react-series.vercel.app/' linkGithub='https://github.com/MaykGomes92/React-Series' imgProject={projeto1} nameProject='Website Séries' descricao=' O projeto consiste em ser um site de séries completo, tendo todas as séries populares e existentes da api IMDb.' mLeft='228px' />

          <PaineisProject linkProjeto='https://website-vikings-router-priv.vercel.app/'
            linkGithub='https://github.com/MaykGomes92/WebSite-Vikings-ReactRouter' imgProject={projeto2} nameProject='Website Vikings' descricao='Projeto feito usando React Router e outras libs do React.' mLeft='350px' />
        </>
      )
    } else return
  }

  return (
    <S.SectionTwo>
      <img id='shapeSectionTwo' className='shapeOrange' src={shape} alt='borda laranja' />
      <h1 className='myPort'>Meu <span>Portfólio</span></h1>

      <div className='buttonsNavProjects'>
        <p onClick={() => setButtonNavAtivo(1)} className={buttonNavAtivo === 1 ? 'ativo' : ''}>
          <ButtonNav />
        </p>
        <p onClick={() => setButtonNavAtivo(2)} className={buttonNavAtivo === 2 ? 'ativo' : ''}>
          <ButtonNav />
        </p>
        <p onClick={() => setButtonNavAtivo(3)} className={buttonNavAtivo === 3 ? 'ativo' : ''}>
          <ButtonNav />
        </p>
        <p onClick={() => setButtonNavAtivo(4)} className={buttonNavAtivo === 4 ? 'ativo' : ''}>
          <ButtonNav />
        </p>
      </div>
      {projetosNav()}
    </S.SectionTwo>
  )
}

export default SectionTwo