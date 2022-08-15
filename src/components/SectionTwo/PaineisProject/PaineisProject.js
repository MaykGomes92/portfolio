import React from 'react'
import * as S from './Style'
import { FaLink } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';

const PaineisProject = ({ nameProject, descricao, linkProjeto, linkGithub, imgProject, mLeft, html, css, js, reactRouter, react, styledComp }) => {

    const media = window.matchMedia('(max-width: 480px)')

    const variantAnimation = media.matches ? {
        variantA: {
            opacity: 0,
            x: 15,
            y: 15,
        },
        variantB: {
            opacity: [0, .5, 1, 0, .6, 1],
            x: -15,
            y: -15,
            transition: { delay: .8, duration: 1 },
        }
    } : {
        variantA: {
            opacity: 0,
            x: 40,
            y: 40,
        },
        variantB: {
            opacity: [0, .5, 1, 0, .6, 1],
            x: -40,
            y: -40,
            transition: { delay: .8, duration: 1 },
        }
    }

    return (
        <S.PaineisProject>
            <div className="paineis" style={{ marginLeft: mLeft }}>
                <div className="quadradoOne">
                    <img src={imgProject} alt='Imagem do projeto' />
                </div>
                <motion.div className="quadradoTwo"
                    variants={variantAnimation}
                    initial='variantA'
                    animate='variantB'
                />
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