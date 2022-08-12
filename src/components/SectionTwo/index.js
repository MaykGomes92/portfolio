import React from 'react'
import { motion } from 'framer-motion'
import * as S from './Style'
import shape from '../../assets/shape.png'
import projeto1 from '../../assets/reactSeries.jpg'
import projeto2 from '../../assets/projeto2.jpg'
import projeto3 from '../../assets/projeto3.jpg'
import projeto4 from '../../assets/projeto4.jpg'
import projeto5 from '../../assets/projeto5.jpg'
import projeto6 from '../../assets/projeto6.jpg'
import projeto7 from '../../assets/projeto7.jpg'
import emConstru from '../../assets/emConstru.png'
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

  const variantAnimationA = {
    variantA: {
      opacity: 0, x: '110%'
    },
    variantB: {
      opacity: 1, x: 0,
      transition: { delay: 0.1, duration: 0.8, type: 'spring', damping: 12 }
    }
  }
  const variantAnimationB = {
    variantA: {
      opacity: 0, x: '110%'
    },
    variantB: {
      opacity: 1, x: 0,
      transition: { delay: 0.3, duration: 0.8, type: 'spring', damping: 12 }
    }
  }

  const projetosNav = () => {
    if (buttonNavAtivo === 1) {
      return (
        <>
          <motion.div
            variants={variantAnimationA}
            initial='variantA'
            animate='variantB'>
            <PaineisProject html={html} css={css} js={js} react={react} styledComp={styledComp} reactRouter={reactRouter}
              linkProjeto='https://react-series.vercel.app/' linkGithub='https://github.com/MaykGomes92/React-Series' imgProject={projeto1} nameProject='Website Séries' descricao=' O projeto consiste em ser um site de séries completo, tendo todas as séries populares e existentes da api IMDb.' mLeft='228px' />
          </motion.div>

          <motion.div
            variants={variantAnimationB}
            initial='variantA'
            animate='variantB'>

            <PaineisProject html={html} css={css} js={js} react={react} reactRouter={reactRouter} linkProjeto='https://website-vikings-router-priv.vercel.app/'
              linkGithub='https://github.com/MaykGomes92/WebSite-Vikings-ReactRouter' imgProject={projeto2} nameProject='Website Vikings' descricao='Projeto feito usando React Router e outras libs do React. Inspirado na série Vikings.' mLeft='500px' />
          </motion.div>
        </>
      )
    } else if (buttonNavAtivo === 2) {
      return (
        <>
          <motion.h1
            variants={variantAnimationA}
            initial='variantA'
            animate='variantB'>
            <PaineisProject html={html} css={css} js={js} linkProjeto='https://mini-game-ballons-priv.vercel.app/' linkGithub='https://github.com/MaykGomes92/Mini-Game-Ballons' imgProject={projeto3} nameProject='Mini Game Ballons' descricao='Um mini game feito em Html, Css e Js puro. Conta com 3 dificuldade, pause e um placar.' mLeft='228px' />
          </motion.h1>

          <motion.h1
            variants={variantAnimationB}
            initial='variantA'
            animate='variantB'>
            <PaineisProject html={html} react={react} css={css} js={js} linkProjeto='https://projeto-web-site-car-q9pp4diuu-mayk-gomes98-hotmailcom.vercel.app/' linkGithub='https://github.com/MaykGomes92/projeto-web-site-car' imgProject={projeto4} nameProject='Mercedez' descricao='Com bastante animações Keyframes, um site inspirado por carros de corrida e campeões.' mLeft='500px' />
          </motion.h1>
        </>
      )
    } else if (buttonNavAtivo === 3) {
      return (
        <>
          <motion.h2
            variants={variantAnimationA}
            initial='variantA'
            animate='variantB'>
            <PaineisProject html={html} react={react} css={css} js={js} linkProjeto='https://react-api-cep.vercel.app/' linkGithub='https://github.com/MaykGomes92/Procurador-de-Cep-React' imgProject={projeto5} nameProject='Buscador de Cep' descricao='Consumindo um Api, ele retorna várias informações ao inserir um CEP.' mLeft='228px' />
          </motion.h2>

          <motion.h2
            variants={variantAnimationB}
            initial='variantA'
            animate='variantB'>

            <PaineisProject html={html} css={css} js={js} linkProjeto='https://lista-tarefas-two.vercel.app/'
              linkGithub='https://github.com/MaykGomes92/Lista-de-tarefas' imgProject={projeto6} nameProject='Lista de Tarefas' descricao='Um app de salvar anotações, seus dados ficam salvos no localStorage. Com efeitos de som e opção de apagar suas anotações.' mLeft='500px' />
          </motion.h2>
        </>
      )
    } else if (buttonNavAtivo === 4) {
      return (
        <>
          <motion.h3
            variants={variantAnimationA}
            initial='variantA'
            animate='variantB'>

            <PaineisProject html={html} react={react} css={css} js={js} linkProjeto='https://gerador-senha-private.vercel.app/' linkGithub='https://github.com/MaykGomes92/Gerador-de-Senha---React' imgProject={projeto7} nameProject='Gerador de Senha' descricao='Gerador de senha automatizado com 3 opções de caracteres, e podendo escolher quantos caracteres desejar.' mLeft='228px' />
          </motion.h3>

          <motion.h3
            variants={variantAnimationB}
            initial='variantA'
            animate='variantB'>
            <PaineisProject html={html} css={css} js={js} react={react} reactRouter={reactRouter} linkProjeto='https://github.com/MaykGomes92'
              linkGithub='https://github.com/MaykGomes92' imgProject={emConstru} nameProject='Em Construção' descricao='Novos projetos estão sendo feitos, irei postando os melhores aqui o/.' mLeft='500px' />
          </motion.h3>
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