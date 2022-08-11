import React from 'react'
import * as S from './Style'
import shape from '../../assets/shape.png'
import PaineisProject from './PaineisProject/PaineisProject'

const SectionTwo = () => {
  return (
    <S.SectionTwo>
        <img id='shapeSectionTwo' className='shapeOrange' src={shape} alt='borda laranja'/>
        <h1 className='myPort'>Meu <span>Portfólio</span></h1>
        <PaineisProject/>
    </S.SectionTwo>
  )
}

export default SectionTwo