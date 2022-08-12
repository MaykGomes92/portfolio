import React from 'react'
import '../../../App.css'
import * as S from './style'
const index = ({link,imgRede}) => {
    return (
        <S.Buttons>
            <div className='container'>
                <a target='_blank' href={link} className='btnPrincipal'>
                    {imgRede}
                </a>

                <button className='shadowButton'>

                </button>
            </div>
        </S.Buttons>
    )
}

export default index