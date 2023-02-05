import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../wrapper/Wrapper'
import classes from './Footer.module.css'
import BtnPrimary from '../TinyComp/BtnPrimary'
import { ArrowForwardIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from './FooterIcons'

function Footer() {
  return (
    <div className={classes.footerMainCon}>
      {/* blueBg container */}
      <div className={classes.blueBgCon}>
        <Wrapper>

          <Wrapper>
            <Wrapper>

              <div className={classes.blueInnerDiv}>

                <h2>PASSER À L’ACTION</h2>

                <div>
                  <BtnPrimary To='/'>
                    <div className={ classes.btnCon }>
                      <span> NOUS CONTACTER</span>
                      <span><ArrowForwardIcon className={ classes.arrowForwardIcon }/></span>
                    </div>
                  </BtnPrimary>

                  <p>allo@j-em.ca</p>
                  <p>418-670-2259</p>
                </div>
              </div>
            </Wrapper>
          </Wrapper>


          {/* Footer Tagline */}
          <div className={classes.footerTagline}>
            <p>©2023 - J-EM Événements</p>
            <p>Conception web par Mikael Design</p>
          </div>

        </Wrapper>

      </div>

      {/* blackBg container */}
      <div className={classes.blackBgCon}>

      <nav>
        <Link to='/'>ACCUEIL</Link>
        <Link to='/services'>RÉALISATIONS</Link>
        <Link to='/a-propos'>À PROPOS</Link>
        <Link to='/blogue'>BLOG</Link>
        <Link to='/contactez-nous'>CONTACT-NOUS</Link>
      </nav>

        <div>
          <a href="https://twitter.com/earl_pappi" rel='noreferrer' target='_blank'><FacebookIcon/></a>
          <a href="https://twitter.com/earl_pappi" rel='noreferrer' target='_blank'><InstagramIcon/></a>
          <a href="https://twitter.com/earl_pappi" rel='noreferrer' target='_blank'><LinkedinIcon/></a>
          <a href="https://twitter.com/earl_pappi" rel='noreferrer' target='_blank'><TwitterIcon/></a>
          <a href="https://twitter.com/earl_pappi" rel='noreferrer' target='_blank'><YoutubeIcon/></a>
        </div>
      </div>
    </div>


  )
}

export default Footer