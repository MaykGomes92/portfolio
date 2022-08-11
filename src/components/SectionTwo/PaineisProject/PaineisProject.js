import React from 'react'
import * as S from './Style'
import { FaLink } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const PaineisProject = ({ nameProject, descricao, linkProjeto, linkGithub, imgProject, mLeft, html, css, js, reactRouter, react, styledComp }) => {
    return (
        <S.PaineisProject>
            <div className="paineis" style={{ marginLeft: mLeft }}>
                <div className="quadradoOne">
                    <img src={imgProject} />
                </div>
                <div className="quadradoTwo" />
            </div>

            <div className='content'>
                <h1>{nameProject}</h1>
                <p>{descricao}</p>

                <div className='tecs'>
                    <p>Tecnologias usadas:</p>
                    <div className='iconesTec'>
                        {html && <img src={html} alt='Ícone html ' />}
                        {css && <img src={css} alt='Ícone css ' />}
                        {js && <img src={js} alt='Ícone js ' />}
                        {react && <img src={react} alt='Ícone react ' />}
                        {reactRouter && <img src={reactRouter} alt='Ícone react ' />}
                        {styledComp && <img src={styledComp} alt='Ícone react ' />}
                    </div>
                    <a rel='noopener' target='_blank' href={linkProjeto} className='linkProject'><FaLink /></a>
                    <a rel='noopener' target='_blank' href={linkGithub} className='gitHubProject'><BsGithub /></a>
                </div>
            </div>
        </S.PaineisProject>
    )
}

export default PaineisProject