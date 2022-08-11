import React from 'react'
import * as S from './Style'
import html from '../../../assets/html.png'
import css from '../../../assets/css.png'
import js from '../../../assets/js.png'
import react from '../../../assets/react.png'
import { FaLink } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const PaineisProject = ({ nameProject, descricao, linkProjeto, linkGithub, imgProject, mLeft }) => {
    return (
        <S.PaineisProject>
            <div className="paineis" style={{marginLeft:mLeft}}>
                <div className="quadradoOne">
                    <img src={imgProject}/>
                </div>
                <div className="quadradoTwo" />
            </div>

            <div className='content'>
                <h1>{nameProject}</h1>
                <p>{descricao}</p>

                <div className='tecs'>
                    <p>Tecnologias usadas:</p>
                    <div className='iconesTec'>
                        <img src={html} alt='Ícone html ' />
                        <img src={css} alt='Ícone css ' />
                        <img src={js} alt='Ícone js ' />
                        <img src={react} alt='Ícone react ' />
                    </div>
                    <a href={linkProjeto} className='linkProject'><FaLink /></a>
                    <a href={linkGithub} className='gitHubProject'><BsGithub /></a>
                </div>
            </div>
        </S.PaineisProject>
    )
}

export default PaineisProject