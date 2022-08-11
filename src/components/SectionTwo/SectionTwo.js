import React from 'react'
import * as S from './Style'
import shape from '../../assets/shape.png'
import html from '../../assets/html.png'
import PaineisProject from './PaineisProject/PaineisProject'

const SectionTwo = () => {
  return (
    <S.SectionTwo>
        <img id='shapeSectionTwo' className='shapeOrange' src={shape} alt='borda laranja'/>
        <h1 className='myPort'>Meu <span>Portfólio</span></h1>
        <PaineisProject imgProject={html} nameProject='WebSite Séries' descricao=' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like.' mLeft='228px'/>

        <PaineisProject imgProject={html} nameProject='WebSite Séries' descricao=' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like.' mLeft='350px'/>

        
    </S.SectionTwo>
  )
}

export default SectionTwo