import React from 'react'
import Wrapper from '../wrapper/Wrapper'
import InnerWrapper from '../wrapper/InnerWrapper'
import classes from './HeroSection.module.css'
import topBg from '../../assets/Apropos/top-right.png'
import bottomCloud from '../../assets/Apropos/bottom-cloud.png'

function HeroSection() {
  return (
    <div className={classes.mainCon} style={{
      backgroundImage: `url(${topBg})`,
    }}>
      <Wrapper>
        <InnerWrapper>
          <div className={classes.heroSection} style={{
            

          }}>
            <h1>À PROPOS</h1>
            <p>
              Imaginez le pouvoir combiné d’une petite équipe agile, capable de se greffer à votre organisation, dans la mise sur pied d’un évènement sur mesure qui saura faire jaser. <span> J-EM, c’est tout ça, et plus.</span>
              <br /><br />
              Grâce à son noyau (au hockey, on dirait un premier trio!) composé de Mario, <span>Jade-Éva et Rébéka, </span>J-EM est en mesure de se consacrer pleinement à votre évènement en misant sur sa polyvalence, son agilité et son expérience. À ce trio se joignent des collaborateurs et partenaires de confiance, choisis selon leurs compétences et leur connaissance pointue de votre domaine d’affaires.
              <br /><br />
              C’est ainsi que depuis plus de 10 ans, J-EM apporte sa touche distinctive au monde de l’évènementiel.
            </p>

            <p className={classes.xp}>VOUS AVEZ UN PROJET? RACONTEZ-NOUS TOUT ÇA ICI!</p>
          </div>
        </InnerWrapper>
      </Wrapper>
      <div className={ classes.floating } style={{
        marginBottom: '-5%'
      }}>
        <img src={bottomCloud} alt="Floating Cloud" />
      </div>
    </div>
  )
}

export default HeroSection